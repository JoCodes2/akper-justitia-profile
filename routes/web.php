<?php

use App\Http\Controllers\CMS\NewsController;
use App\Http\Controllers\CMS\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/cms/dashboard', function () {
    return view('pages.Dashboard');
});
Route::get('/cms/profile', function () {
    return view('pages.Profile');
});
Route::get('/cms/galery', function () {
    return view('pages.Galery');
});
Route::get('/cms/news', function () {
    return view('pages.News');
});

Route::fallback(function () {
    return view('frontend');
});



// route api
Route::prefix('justitia')->group(function () {
    // Routes profile
    Route::prefix('profile')->controller(ProfileController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });
    // Routes profile
    Route::prefix('news')->controller(NewsController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });
});
