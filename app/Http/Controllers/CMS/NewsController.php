<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use App\Repositories\NewsRepositories;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    protected $newsRepo;
    public function __construct(NewsRepositories $newsRepo)
    {
        $this->newsRepo = $newsRepo;
    }
    public function getAllData()
    {
        return $this->newsRepo->getAllData();
    }
    public function createData(NewsRequest $request)
    {
        return $this->newsRepo->createData($request);
    }
    public function getDataById($id)
    {
        return $this->newsRepo->getDataById($id);
    }
    public function updateData(NewsRequest $request, $id)
    {
        return $this->newsRepo->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->newsRepo->deleteData($id);
    }
}
