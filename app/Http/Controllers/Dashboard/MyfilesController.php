<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Download;
use App\Models\File;
use App\Service\Zip\ZipService;
use Illuminate\Http\Request;
use function PHPUnit\Framework\directoryExists;

class MyfilesController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->files()->paginate(20);
    }

    public function addFile(Request $request)
    {
        $user = $request->user();
        $user->files()->attach([
            'file_id' => $request->file_id,
        ]);
    }

    public function generateZip(File $file, ZipService $zipService)
    {
        $this->authorize('view', $file);
        if ($download = Download::whereUser_id(\request()->user()->id)->whereFile_id($file->id)->where('expired_at', '>', now())->first()) {
            return $download;
        } else {
            $download = $zipService->downloadFile($file);
        }
        return $download;
    }
}
