<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Discount;
use App\Models\File;
use App\Models\Payment;
use App\Service\Payment\Payment as PaymentFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Collection;
use Zarinpal\Laravel\Facade\Zarinpal;


class PaymentController extends Controller
{
    public function buy(Request $request)
    {
        $user = $request->user();
        $file = File::findOrFail($request->file_id);
        $amount = $file->toman_price;
        $RequestDiscount = $request->discount_id;
        $statusUserBoughtFile = PaymentFacade::userBoughtFile($file, $user);

        if ($statusUserBoughtFile) {
            PaymentFacade::notifyError('خطایی رخ داده است', 'شما قبلا این فایل را خریداری کرید', 'info', 'تایید');
            return back();
        }
        $prices = PaymentFacade::applyDiscount($RequestDiscount, $amount, $file);

        $amount = $prices['amount'];
        $discountPrice = $prices['discountPrice'];
        $results = PaymentFacade::connectToPay($amount, $file);
        if (PaymentFacade::checkAuthority($results)) {
            PaymentFacade::createPaymentAndRedirectToPay($amount, $file, $user, $discountPrice, $results);
        }

        PaymentFacade::notifyError('خطایی رخ داده است', 'لطفا مجددا اقدام به ثبت سفارش کنید', 'error', 'تایید');
        return back();
    }

    public function callback()
    {
        $payment = Payment::firstWhere('authority', \request('Authority'));
        $status = Zarinpal::verify('ok', $payment->price, $payment->authority);
        $authority = \request('Authority');
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

            $payment->paymentable->users()->attach($payment->user_id, ['payment_id' => $payment->id]);
            session()->flash('notify', [
                'title' => 'پرداخت موفقیت آمیز',
                'text' => '  سپاس از خرید شما کد پیگیری شما :' . $status['RefID'],
                'icon' => 'success',
                'confirm_text' => 'بسیار خب'
            ]);
            return redirect('/dashboard/my-files');
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
