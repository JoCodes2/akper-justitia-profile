<?php

namespace App\Http\Controllers;

use App\Models\GaleriModel;
use App\Models\NewsModel;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getCountData()
    {
        $totalNews   = NewsModel::count();
        $totalGalery = GaleriModel::count();

        $latestNews = NewsModel::orderBy('date_upload', 'desc')
            ->take(5)
            ->get(['id', 'title', 'date_upload']);

        return response()->json([
            'status' => 'success',
            'data'   => [
                'totalNews'   => $totalNews,
                'totalGalery' => $totalGalery,
                'latestNews'  => $latestNews
            ]
        ], 200);
    }
}
