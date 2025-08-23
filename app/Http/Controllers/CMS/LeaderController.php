<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaderRequest;
use App\Repositories\LeaderRepositories;
use Illuminate\Http\Request;

class LeaderController extends Controller
{
    protected $leaderRepo;

    public function __construct(LeaderRepositories $leaderRepo)
    {
        $this->leaderRepo = $leaderRepo;
    }
    public function getAllData()
    {
        return $this->leaderRepo->getAllData();
    }
    public function getDataById($id)
    {
        return $this->leaderRepo->getDataById($id);
    }
    public function createData(LeaderRequest $request)
    {
        return $this->leaderRepo->createData($request);
    }
    public function updateData(LeaderRequest $request, $id)
    {
        return $this->leaderRepo->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->leaderRepo->deleteData($id);
    }
}
