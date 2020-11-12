<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});

Route::group(['namespace'=>'Auth'],function (){

Route::post('login','LoginController@login');
Route::post('register','RegisterController@register');

});
