<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use App\Http\Resources\FileCollection;
use App\Http\Resources\FileUserCollection;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return FileUserCollection
     */
    public function index()
    {
        return new FileUserCollection(
            File::with('categories','membership')->sortByUrl()->SearchByUrl()->paginate(5)
    );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\File $file
     * @return Response
     */
    public function show(File $file)
    {
        return $file->load('categories')->append(['image_src','price_toman','membership_name','related_files']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\File $file
     * @return Response
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\File $file
     * @return Response
     */
    public function destroy(File $file)
    {
        //
    }
}
