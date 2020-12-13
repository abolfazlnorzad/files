<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user()->append('current_membership');
});

Route::group(['namespace' => 'Auth'], function () {

    Route::post('login', 'LoginController@login');
    Route::post('register', 'RegisterController@register');

});
Route::group(['middleware' => ['auth:api', 'admin'], 'prefix' => 'admin', 'namespace' => 'Admin'], function () {
    Route::apiResource('users', 'UserController');
    Route::apiResource('categories', 'CategoryController');
    Route::apiResource('memberships', 'MembershipController');
    Route::apiResource('file', 'FileController');
    Route::apiResource('discount', 'DiscountController');
    Route::get('payments', 'PaymentController@index');
    Route::get('dashboard', 'DashboardController@index');
    Route::get('charts', 'DashboardController@charts');

    Route::get('membership-search', 'Search\MembershipController@index');
    Route::get('category-search', 'Search\CategoryController@index');

});
Route::apiResource('file', 'File\FileController');
Route::post('discount', 'Front\ApplyDiscountController@store')->middleware('auth:api');

Route::get('membership', 'Dashboard\MembershipController@index')->middleware('auth:api');
Route::get('dashboard/my-files', 'Dashboard\MyfilesController@index')->middleware('auth:api');
Route::post('add-to-files', 'Dashboard\MyfilesController@addFile')->middleware('auth:api');
Route::get('generate-zip/{file}', 'Dashboard\MyfilesController@generateZip')->middleware('auth:api');
