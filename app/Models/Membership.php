<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends=['type'];
    protected $casts = [
        'is_yearly' => 'boolean'
    ];

    public function getTypeAttribute()
    {
        return $this->is_yearly ? 'سالانه':'ماهیانه';
    }

}
