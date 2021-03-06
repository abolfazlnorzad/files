<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    return view('home');
});

Route::get('download/{file}', function (\App\Models\File $file) {
    return \Illuminate\Support\Facades\Storage::download($file->file_src);
})->middleware(['auth:api', 'admin']);
Route::get('download-zip/{download}', 'DownloadController@downloadZip')->middleware('auth:api');

Route::post('buy', 'Front\PaymentController@buy')->middleware('auth:api');
Route::post('buy/membership', 'Dashboard\MembershipPaymentController@buy')->middleware('auth:api');
Route::get('buy/membership/callback', 'Dashboard\MembershipPaymentController@callback')->name('payment.membership.callback');
Route::get('buy/callback', 'Front\PaymentController@callback')->name('payment.callback');
