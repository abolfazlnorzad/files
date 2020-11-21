<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'Auth'], function () {

    Route::post('login', 'LoginController@login');
    Route::post('register', 'RegisterController@register');

});
Route::group(['middleware' => ['auth:api', 'admin'], 'prefix' => 'admin', 'namespace' => 'Admin'],function (){
    Route::apiResource('users', 'UserController');
    Route::apiResource('categories', 'CategoryController');
    Route::apiResource('memberships', 'MembershipController');
    Route::apiResource('file', 'FileController');


    Route::get('membership-search','Search\MembershipController@index');
    Route::get('category-search','Search\CategoryController@index');

});
Route::apiResource('file', 'File\FileController');

