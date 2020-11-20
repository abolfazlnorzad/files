<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileRequest;
use App\Http\Resources\FileCollection;
use App\Models\File;
use App\Service\FileService;
use App\Traits\FileTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;


class FileController extends Controller
{
    use FileTrait;

    protected $file;

    public function __construct()
    {
        $this->file = new FileService();
    }

    /**
     * Display a listing of the resource.
     *
     * @return FileCollection
     */
    public function index()
    {
        return new FileCollection(File::sortByUrl()->SearchByUrl()->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param FileRequest $request
     * @return void
     */
    public function store(FileRequest $request)
    {
        $status = $this->createOrUpdateFile($request);
        return response(['ok'], $status);
    }

    /**
     * Display the specified resource.
     *
     * @param File $file
     * @return File
     */
    public function show(File $file)
    {
        return $file;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param File $file
     * @return void
     */
    public function update(FileRequest $request, File $file)
    {
        $status = $this->createOrUpdateFile($request, $file);
        return response('error', $status);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param File $file
     * @return Response
     */
    public function destroy(File $file)
    {
        $this->file->remove($file->file_src);
        return response('deleted', 200);
    }


}

