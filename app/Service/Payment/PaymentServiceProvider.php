<?php


namespace App\Service\Payment;


use Illuminate\Support\ServiceProvider;

class PaymentServiceProvider extends ServiceProvider
{
    public function register()
    {
         $this->app->singleton('payment', function () {
           return new PaymentService();
        });
    }
}
