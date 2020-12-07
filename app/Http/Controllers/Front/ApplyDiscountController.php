<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplyDiscountRequest;
use App\Models\Discount;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Type;

class ApplyDiscountController extends Controller
{
    public function store(ApplyDiscountRequest $request)
    {

        $discount = Discount::whereCode($request->discount)->first();
        $price =$discount->getRealPrice($request->price);

        return [
            'id' => $discount->id,
            'price' => $price
        ];
    }
}
