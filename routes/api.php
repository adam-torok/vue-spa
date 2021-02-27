<?php

use App\Http\Controllers\AdvertController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistrateController;
use Illuminate\Support\Facades\Route;

Route::post('registrate', [RegistrateController::class, 'store']);
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});
Route::post('profile/update',[ProfileController::class, 'update']);
Route::post('advert/store',[AdvertController::class, 'store']);