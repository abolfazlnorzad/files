<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    use HasFactory;
    public function getRouteKeyName()
    {
        return 'link';
    }

    protected $guarded = [];

    public function getFileContent()
    {
        return \Illuminate\Support\Facades\File::get(public_path('zip/'.$this->zip_name));
    }
}
