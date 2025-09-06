<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CMS\NewsController;
use App\Http\Controllers\CMS\GaleriController;
use App\Http\Controllers\CMS\LeaderController;
use App\Http\Controllers\CMS\ProdiController;
use App\Http\Controllers\CMS\ProfileController;
use App\Http\Controllers\CMS\UserController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\SitemapGenerator;

Route::post('justitia/login', [AuthController::class, 'login']);
Route::get('justitia/profile/', [ProfileController::class, 'getAllData']);
Route::get('justitia/leader/', [LeaderController::class, 'getAllData']);
Route::get('justitia/news/', [NewsController::class, 'getAllData']);
Route::get('justitia/galeri/', [GaleriController::class, 'getAllData']);
Route::get('justitia/prodi/', [ProdiController::class, 'getAllData']);


Route::get('/cms/login', function () {
    return view('auth.Login');
})->name('login')->middleware('guest');

Route::middleware(['auth', 'web'])->group(function () {
    Route::get('/cms/dashboard', function () {
        return view('pages.Dashboard');
    });
    Route::get('/cms/profile', function () {
        return view('pages.Profile');
    })->middleware('role:admin');;
    Route::get('/cms/galery', function () {
        return view('pages.Galery');
    });
    Route::get('/cms/news', function () {
        return view('pages.News');
    });
    Route::get('/cms/leader', function () {
        return view('pages.Leader');
    })->middleware('role:admin');;
    Route::get('/cms/user', function () {
        return view('pages.User');
    })->middleware('role:admin');;

    Route::get('/cms/prodi', function () {
        return view('pages.Prodi');
    })->middleware('role:admin');;

    // route api
    Route::prefix('justitia')->group(function () {
        // dahboard
        Route::get('/dashboard', [DashboardController::class, 'getCountData']);
        // Routes profile
        Route::prefix('profile')->controller(ProfileController::class)->group(function () {
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });
        // route leader
        Route::prefix('leader')->controller(LeaderController::class)->group(function () {
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });
        // Routes news
        Route::prefix('news')->controller(NewsController::class)->group(function () {
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });
        // Routes galeri
        Route::prefix('galeri')->controller(GaleriController::class)->group(function () {
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });

        // Routes user
        Route::prefix('user')->controller(UserController::class)->group(function () {
            Route::get('/', 'getAllData');
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });

        Route::prefix('prodi')->controller(ProdiController::class)->group(function () {
            Route::post('/create', 'createData');
            Route::get('/get/{id}', 'getDataById');
            Route::post('/update/{id}', 'updateData');
            Route::delete('/delete/{id}', 'deleteData');
        });
    });
    Route::post('justitia/logout', [AuthController::class, 'logout']);
});

Route::fallback(function () {
    return view('frontend');
});
Route::get('/generate-sitemap', function () {
    SitemapGenerator::create('https://akperjustitia.ac.id')
        ->writeToFile(public_path('sitemap.xml'));

    return '✅ Sitemap berhasil dibuat di public/sitemap.xml';
});
