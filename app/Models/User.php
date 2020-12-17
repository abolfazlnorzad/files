<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $guarded = [];
    protected $appends = ['type', 'profile_src'];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getTypeAttribute()
    {
        return $this->isAdmin ? 'ادمین' : 'کاربر عادی';
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function files()
    {
        return $this->belongsToMany(File::class)->withPivot('payment_id');
    }

    public function memberships()
    {
        return $this->belongsToMany(Membership::class)->withPivot(['payment_id', 'expired_at']);
    }

    public function getCurrentMembershipAttribute()
    {
        return $this->memberships()->where('membership_user.expired_at', '>', now())->orderBy('membership_user.created_at', 'desc')->first();
    }

    public function getProfileSrcAttribute()
    {
        return $this->profile ?? '/images/1.png';
    }

}
