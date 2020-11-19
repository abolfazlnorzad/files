<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    return view('home');
});

Route::get('download/{file}', function (\App\Models\File $file) {
    return \Illuminate\Support\Facades\Storage::download($file->file_src);
})->middleware(['auth:api','admin']);
