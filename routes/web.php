<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CMS\NewsController;
use App\Http\Controllers\CMS\GaleriController;
use App\Http\Controllers\CMS\LeaderController;
use App\Http\Controllers\CMS\ProfileController;
use App\Http\Controllers\CMS\UserController;
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
Route::get('/cms/leader', function () {
    return view('pages.Leader');
});
Route::get('/cms/user', function () {
    return view('pages.User');
});


Route::fallback(function () {
    return view('frontend');
});

Route::post('justitia/login', [AuthController::class, 'login']);
Route::get('/cms/login', function () {
    return view('auth.Login');
})->name('login')->middleware('guest');

Route::middleware(['auth', 'web'])->group(function () {
    Route::post('justitia/logout', [AuthController::class, 'logout']);
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
    // route leader
    Route::prefix('leader')->controller(LeaderController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });
    // Routes news
    Route::prefix('news')->controller(NewsController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });
    // Routes galeri
    Route::prefix('galeri')->controller(GaleriController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });

    // Routes galeri
    Route::prefix('user')->controller(UserController::class)->group(function () {
        Route::get('/', 'getAllData');
        Route::post('/create', 'createData');
        Route::get('/get/{id}', 'getDataById');
        Route::post('/update/{id}', 'updateData');
        Route::delete('/delete/{id}', 'deleteData');
    });
});
