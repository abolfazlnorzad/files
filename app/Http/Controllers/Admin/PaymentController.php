<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentCollection;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        return PaymentCollection::make(
            Payment::with(['user','paymentable',])
                ->paginate(10)
        );
    }
}
