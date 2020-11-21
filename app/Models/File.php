<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory, Sluggable;

    protected $columns = [
        'i' => 'id',
        'n' => 'name',
        'd' => 'description',
        'p' => 'price',
        'm' => 'membership_id',
        'ca' => 'created_at',
    ];
    protected $guarded = [];
    protected $hidden = ['file'];
    protected $appends = [
        'membership_name', 'file_src', 'selectedTags','price_toman'
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
        if ($this->membership_id) {
            return $this->membership->name;
        }
        return 'خرید با عضویت ویژه امکان پذیر نیست ';

    }

    public function getFileSrcAttribute()
    {
        return 'files/' . $this->file;
    }

    public function getImageSrcAttribute()
    {
        return 'images/' . $this->image;
    }


    public function getSelectedTagsAttribute()
    {
        return $this->categories->map(function ($item) {
            return [
                'key' => $item->id, 'value' => $item->name
            ];
        });
    }

    public function scopeSortByUrl($query)
    {
        $sortby = $this->columns[request()->sortBy] ?? 'id';
        $sortdir = request()->sortDir === 'desc' ? 'desc' : 'asc';
        return $query->orderBy($sortby, $sortdir);
    }

    public function scopeSearchByUrl($query)
    {
        if (request()->search) {
            $query->where('name', "LIKE", "%" . request()->search . "%")
                ->orWhere('description', "LIKE", "%" . request()->search . "%");
        }
        return $query;
    }

    public function getPriceTomanAttribute()
    {
        if ($this->price) {
            return $this->price . ',000 تومان';
        }
            return 'خرید نقدی امکان پذیر نیست';

    }

    public function getRelatedFilesAttribute()
    {
        return $this->where('id','!=',$this->id)->whereHas('categories',function ($query){
            return $query->whereIn('categories.id',$this->categories->pluck('id')->toArray());
        })->inRandomOrder()->limit(3)->get();
    }
}
