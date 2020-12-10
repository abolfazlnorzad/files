<?php


namespace App\Service\MembershipPay;


use Illuminate\Support\Facades\Facade;

class MembershipPay extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'membershipPay';
    }
}
