<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Discount;
use App\Models\File;
use App\Models\Payment;
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
        if ($file->users()->where('user_id', $user->id)->count()){
            session()->flash('notify', [
                'title' => 'به مشکلی خوردیم!',
                'text' => 'شما این فایل را خریداری کرده اید!!!',
                'icon' => 'error',
                'confirm_text' => 'یادم نبود',
            ]);

            return back();
        }

        $amount = $file->toman_price;
        $discountPrice = 0;
        if ($request->discount_id) {
            $discount = Discount::findOrFail($request->discount_id);
            $amount = $discount->getRealPrice($amount);
            $discountPrice = $discount->getDiscount($file->toman_price);
        }
        $results = Zarinpal::request(
            url(route('payment.callback')),          //required
            $amount,                                  //required
            $file->description,                             //required
        );
        if (isset($results['Authority']) && !empty($results['Authority'])) {
            Payment::create([
                'price' => $amount,
                'original_price' => $file->toman_price,
                'discounted_price' => $discountPrice,
                'file_id' => $file->id,
                'user_id' => $user->id,
                'authority' => $results['Authority'],
            ]);
            Zarinpal::redirect(); // redirect user to zarinpal
        }

        session()->flash('notify', [
            'title' => 'خطایی رخ داده',
            'text' => 'لطفا مجددا اقدام به ثبت سفارش کنید',
            'icon' => 'error',
            'confirm_text' => 'تایید',
        ]);

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

            $payment->file->users()->attach($payment->user_id, ['payment_id' => $payment->id]);
            session()->flash('notify', [
                'title'=>'پرداخت موفقیت آمیز',
                'text'=>'  سپاس از خرید شما کد پیگیری شما :'.$status['RefID'],
                'icon'=>'success',
                'confirm_text'=>'بسیار خب'
            ]);
            return redirect('/');
        } elseif ($status['Status'] == 'verfied_before') {
            session()->flash('notify', [
                'title'=>'سفارش شما قبلا ثبت شده',
                'text'=>'شما قبلا این این تراکنش را تکرار کردید',
                'icon'=>'success',
                'confirm_text'=>'بسیار خب'
            ]);
            return redirect('/');
        } else {
            session()->flash('notify', [
                'title'=>'تراکنش توسط شما لغو شد',
                'text'=>'متاسفانه تراکنش توسط شما لغو شد ، امیدواریم لیاقت انتخاب شما را داشته باشیم',
                'icon'=>'info',
                'confirm_text'=>'بسیار خب'
            ]);
            return redirect('/');
        }
    }
}
