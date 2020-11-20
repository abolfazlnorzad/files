<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory, Sluggable;

    protected $columns = [

        'n' => 'name',
        'd' => 'description',
        'p' => 'price',
        'm' => 'membership_id',
        'ca' => 'created_at',
    ];
    protected $guarded = [];
    protected $appends = [
        'membership_name', 'file_src', 'selectedTags'
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
        return $query->orderBy($sortby, request()->sortDir);
    }

    public function scopeSearchByUrl($query)
    {
        if (request()->search) {
            $query->where('name', "LIKE", "%" . request()->search . "%")
                ->orWhere('description', "LIKE", "%" . request()->search . "%");
        }
        return $query;
    }

}
