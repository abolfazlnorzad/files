<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    return view('home');
});

Route::get('download/{file}', function (\App\Models\File $file) {
    return \Illuminate\Support\Facades\Storage::download($file->file_src);
})->middleware(['auth:api','admin']);

Route::post('buy','Front\PaymentController@buy')->middleware('auth:api');
Route::get('buy/callback','Front\PaymentController@callback')->name('payment.callback');
