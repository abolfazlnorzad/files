<?php

namespace App\Http\Controllers;

use App\Models\Download;
use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function downloadZip(Download $download)
    {
        $this->authorize('view', $download);
        return response()->streamDownload(function () use ($download) {
            echo $download->getFileContent();
        }, $download->zip_name);
    }
}
