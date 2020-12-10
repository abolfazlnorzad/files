<?php


namespace App\Service\MembershipPay;


use App\Models\Payment;
use Zarinpal\Laravel\Facade\Zarinpal;

class MembershipPayService
{


    public function notifyError($title, $text, $icon, $confirm_text)
    {
        session()->flash('notify', [
            'title' => $title,
            'text' => $text,
            'icon' => $icon,
            'confirm_text' => $confirm_text,
        ]);
    }

    public function connectToPay($amount, $membership)
    {
        return Zarinpal::request(
            url(route('payment.membership.callback')),            //required
            $amount,                                        //required
            $membership->description,                             //required
        );
    }

    public function createPaymentAndRedirectToPay($amount, $membership, $user, $results)
    {
        Payment::create([
            'price' => $amount,
            'original_price' => $membership->price_in_toman,
            'discounted_price' => 0,
            'paymentable_id' => $membership->id,
            'paymentable_type' => get_class($membership),
            'user_id' => $user->id,
            'authority' => $results['Authority'],
        ]);
        Zarinpal::redirect(); // redirect user to zarinpal
    }

    public function checkAuthority($results)
    {
        return isset($results['Authority']) && !empty($results['Authority']);
    }

    public function userBoughtHigherMembership($user, $membership)
    {

        if (! $user->current_membership) {
            return false;
        }
        return $user->current_membership->priority <= $membership->priority
            && $user->current_membership->is_yearly === $membership->is_yearly;
    }
}
