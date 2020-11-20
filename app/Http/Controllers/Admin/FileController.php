<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileRequest;
use App\Http\Resources\FileCollection;
use App\Models\File;
use App\Service\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class FileController extends Controller
{
    protected $file;
    protected $columns = [

        'n' => 'name',
        'd' => 'description',
        'p' => 'price',
        'm' => 'membership_id',
        'ca' => 'created_at',
    ];

    public function __construct()
    {
        $this->file = new FileService();
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $sortby = $this->columns[$request->sortBy] ?? 'id';
        $files = File::orderBy($sortby, $request->sortDir);
        if ($request->search) {
            $files->where('name',"LIKE","%$request->search%")
            ->orWhere('description',"LIKE","%$request->search%");
        }
        return new FileCollection($files->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(FileRequest $request)
    {
        DB::transaction(function () use ($request) {
            try {
                $data = $this->dataForCrud($request);
                $file = File::create($data);
                $file->syncCategories($request->selectedTags);

                return response('created', 200);
            } catch (\Exception $e) {
                DB::rollBack();
                if (Storage::exists('files/' . $data['file'])) {
                    Storage::delete('files/' . $data['file']);
                }
                return response('error', 500);
            }
        });


    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\File $file
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\File $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\File $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        Storage::delete($file->file_src);
        $file->delete();
        return response('deleted', 200);
    }

    /**
     * @param $request
     * @return mixed
     */
    public function dataForCrud($request)
    {
        $file_name = $this->file->storeStorage($request->file('file'));
        $data = $request->except('selectedTags', 'file');
        $data['file'] = $file_name;
        return $data;
    }
}
