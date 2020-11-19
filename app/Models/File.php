<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory, Sluggable;

    protected $guarded = [];
    protected $appends = [
        'membership_name', 'file_src'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function syncCategories($categories)
    {
        $this->categories()->sync(
            array_filter(collect($categories)->pluck('key')->toArray())
        );
    }

    public function membership()
    {
        return $this->belongsTo(Membership::class);
    }

    public function getMembershipNameAttribute()
    {
        return $this->membership->name;
    }

    public function getFileSrcAttribute()
    {
        return 'files/' . $this->file;
    }

}
