<?php


namespace App\Service\MembershipPay;


use Illuminate\Support\ServiceProvider;

class MembershipPayServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('membershipPay', function () {
            return new MembershipPayService();
        });
    }
}
