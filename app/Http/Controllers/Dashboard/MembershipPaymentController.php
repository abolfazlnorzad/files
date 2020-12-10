<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\Payment;
use App\Service\MembershipPay\MembershipPay;
use App\Service\Payment\Payment as PaymentFacade;
use Illuminate\Http\Request;
use Zarinpal\Laravel\Facade\Zarinpal;

class MembershipPaymentController extends Controller
{
    public function buy(Request $request)
    {
        $user = $request->user();
        $membership = Membership::firstWhere('id', $request->membership_id);
        $amount = $membership->price_in_toman;
        $userBoughtHigherMembership = MembershipPay::userBoughtHigherMembership($user,$membership);

        if ($userBoughtHigherMembership){
            MembershipPay:: notifyError('خطایی رخ داده است', 'شما اشتراکی با اولویت بالاتری دارید', 'info', 'تایید');
            return redirect('/');
        }


            $results = MembershipPay::connectToPay($amount, $membership);

        if (MembershipPay::checkAuthority($results)) {
            MembershipPay::createPaymentAndRedirectToPay($amount, $membership, $user, $results);
        }
    }

    public function callback()
    {
        $authority = \request('Authority');
        $payment = Payment::firstWhere('authority', $authority);
        $status = Zarinpal::verify('OK', $payment->price, $payment->authority);
        if (is_null($payment) || is_null($status) || is_null($authority)) {
            session()->flash('notify', [
                'title' => 'خطایی رخ داده است',
                'text' => 'در صورتی که وجه از حساب شما کسر شده و بعد از گذشت 48 ساعت بازگشت پیدا نکرد ، با پشتیبانی کانکت شوید',
                'icon' => 'error',
                'confirm_text' => 'باشه !'
            ]);

            return back();
        }
        if ($status['Status'] == 'success') {
            $payment->update([
                'is_payed' => true,
                'ref_id' => $status['RefID'],
                'extra_details' => $status['ExtraDetail']
            ]);

            $payment->paymentable->users()->attach($payment->user_id, [
                'payment_id' => $payment->id,
                'expired_at' => $payment->paymentable->expired_at
            ]);
            session()->flash('notify', [
                'title' => 'پرداخت موفقیت آمیز',
                'text' => '  سپاس از خرید شما کد پیگیری شما :' . $status['RefID'],
                'icon' => 'success',
                'confirm_text' => 'بسیار خب'
            ]);
            return redirect('/');
        } elseif ($status['Status'] == 'verfied_before') {
            session()->flash('notify', [
                'title' => 'سفارش شما قبلا ثبت شده',
                'text' => 'شما قبلا این این تراکنش را تکرار کردید',
                'icon' => 'success',
                'confirm_text' => 'بسیار خب'
            ]);
            return redirect('/');
        } else {
            session()->flash('notify', [
                'title' => 'تراکنش توسط شما لغو شد',
                'text' => 'متاسفانه تراکنش توسط شما لغو شد ، امیدواریم لیاقت انتخاب شما را داشته باشیم',
                'icon' => 'info',
                'confirm_text' => 'بسیار خب'
            ]);
            return redirect('/');
        }
    }
}
