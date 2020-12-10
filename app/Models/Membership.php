<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\AbstractList;

class Membership extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['type', 'price_in_toman'];
    protected $casts = [
        'is_yearly' => 'boolean'
    ];

    public function getTypeAttribute()
    {
        return $this->is_yearly ? 'سالانه' : 'ماهیانه';
    }

    public function getPriceInTomanAttribute()
    {
        return $this->price . '000';
    }

    public function payments()
    {
        return $this->morphMany(Payment::class, 'paymentable');
    }

    public function users()
    {
        return $this->belongsToMany(User::class)
            ->withPivot(['expired_at', 'payment_id'])
            ->withTimestamps();
    }

    public function getExpiredAtAttribute()
    {
        return $this->is_yearly ? now()->addYear() : now()->addMonth();
    }

}
