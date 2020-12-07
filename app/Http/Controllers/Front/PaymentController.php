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
        $amount = $file->toman_price;
        if ($request->discount_id) {
            $discount = Discount::findOrFail($request->discount_id);
            $amount = $discount->getRealPrice($amount);
        }
        $results = Zarinpal::request(
         url(route('payment.callback')),          //required
            1000,                                  //required
            'testing',                             //required
        );
        dd($results);
// save $results['Authority'] for verifying step
//        Zarinpal::redirect(); // redirect user to zarinpal
    }


    public function callback()
    {
        dd('ok');
    }
}
