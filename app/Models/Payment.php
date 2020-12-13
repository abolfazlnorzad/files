<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $casts = [
        'is_payed' => 'boolean',
        'extra_details' => 'json'
    ];

    protected $appends = [
        'price_pay', 'origin_price', 'discount_price', 'payment_type','type_class','type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function paymentable()
    {
        return $this->morphTo();
    }

    public function getOriginPriceAttribute()
    {
        return $this->original_price;
    }

    public function getPricePayAttribute()
    {
        return $this->price;
    }

    public function getDiscountPriceAttribute()
    {
        return $this->discounted_price
            ? $this->discounted_price . ' تومان'
            : 'تخفیف ندارد';

    }

    public function getPaymentTypeAttribute()
    {
        return $this->is_payed ? 'پرداخت شده' : 'پرداخت نشده';
    }

    public function getTypeClassAttribute()
    {
        return $this->paymentable_type === 'App\Models\File' ? 'فایل' : 'اشتراک ویژه';
    }

    public function getTypeAttribute()
    {
        return $this->paymentable_type === 'App\Models\File' ? 'file' : 'membership';
    }


    public function getCreateTimeAttribute()
    {
        return $this->created_at->format('Y-m-d');
    }
}
