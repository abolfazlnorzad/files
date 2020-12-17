<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use App\Http\Resources\FileUserCollection;
use App\Models\Category;
use App\Models\File;
use Illuminate\Http\Request;

class FileTaggedController extends Controller
{
    public function index(Category $category)
    {
        return new FileUserCollection(
            File::with('categories')
                ->whereHas('categories', function ($query) use ($category) {
                    $query->where('slug', $category->slug);
                })->sortByUrl()->SearchByUrl()->paginate(15)
        );
    }
}
