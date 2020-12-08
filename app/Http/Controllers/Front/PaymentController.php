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
        abort_if($file->users()->where('user_id', $user->id)->count(), 500);

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

    public function callback()
    {
        $payment = Payment::firstWhere('authority', \request('Authority'));
        $status = Zarinpal::verify('ok', $payment->price, $payment->authority);
        if ($status['Status'] == 'success') {
            $payment->update([
                'is_payed' => true,
                'ref_id' => $status['RefID'],
                'extra_details' => $status['ExtraDetail']
            ]);

            $payment->file->users()->attach($payment->user_id,['payment_id'=>$payment->id]);
            return "پرداخت با موفقیت انجام شد";
        } elseif ($status['Status'] == 'verfied_before') {
            return "قبلا انجام شده است";
        } else {
            return "خطایی رخ داده است";
        }
    }
}
