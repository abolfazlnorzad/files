<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'code';
    }

    public function getRealPrice($price)
    {
        return $price - (($price * $this->percent) / 100);
    }

    public function getDiscount($price)
    {
        return  (($price * $this->percent) / 100);
    }
}
