<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MyfilesController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->files()->paginate(20);
    }

    public function addFile(Request $request)
    {
       $user=$request->user();
        $user->files()->attach([
            'file_id'=>$request->file_id,
        ]);
    }
}
