<?php


namespace App\Service\Payment;


use App\Models\Discount;
use App\Models\Payment;
use Zarinpal\Laravel\Facade\Zarinpal;

class PaymentService
{
    public function userBoughtFile($file, $user)
    {
        return !!$file->users()->firstWhere('user_id', $user->id);
    }

    public function notifyError($title, $text, $icon, $confirm_text)
    {
        session()->flash('notify', [
            'title' => $title,
            'text' => $text,
            'icon' => $icon,
            'confirm_text' => $confirm_text,
        ]);
    }

    public function applyDiscount($RequestDiscount, $amount, $file)
    {

        if ($RequestDiscount) {
            $discount = Discount::findOrFail($RequestDiscount);
            $amount = $discount->getRealPrice($amount);
            $discountPrice = $discount->getDiscount($file->toman_price);
        } else {
            $discountPrice = 0;
        }
        return [
            'amount' => $amount,
            'discountPrice' => $discountPrice
        ];
    }

    public function connectToPay($amount, $file)
    {
        return Zarinpal::request(
            url(route('payment.callback')),            //required
            $amount,                                        //required
            $file->description,                             //required
        );
    }

    public function createPaymentAndRedirectToPay($amount, $file, $user, $discountPrice, $results)
    {
        Payment::create([
            'price' => $amount,
            'original_price' => $file->toman_price,
            'discounted_price' => $discountPrice,
            'paymentable_id' => $file->id,
            'paymentable_type' => get_class($file),
            'user_id' => $user->id,
            'authority' => $results['Authority'],
        ]);
        Zarinpal::redirect(); // redirect user to zarinpal
    }

    public function checkAuthority($results)
    {
        return isset($results['Authority']) && !empty($results['Authority']);
    }

}
