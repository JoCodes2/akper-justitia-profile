<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;
use App\Repositories\ProfileRepositories;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    protected $profileRepo;
    public function __construct(ProfileRepositories $profileRepo)
    {
        $this->profileRepo = $profileRepo;
    }
    public function getAllData()
    {
        return $this->profileRepo->getAllData();
    }
    public function createData(ProfileRequest $request)
    {
        return $this->profileRepo->createData($request);
    }
    public function getDataById($id)
    {
        return $this->profileRepo->getDataById($id);
    }
    public function updateData(ProfileRequest $request, $id)
    {
        return $this->profileRepo->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->profileRepo->deleteData($id);
    }
}
