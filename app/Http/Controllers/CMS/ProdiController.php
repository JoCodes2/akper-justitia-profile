<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdiRequest;
use App\Repositories\ProdiRepositories;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    protected $ProdiRepo;
    public function __construct(ProdiRepositories $ProdiRepo)
    {
        $this->ProdiRepo = $ProdiRepo;
    }
    public function getAllData()
    {
        return $this->ProdiRepo->getAllData();
    }
    public function createData(ProdiRequest $request)
    {
        return $this->ProdiRepo->createData($request);
    }
    public function getDataById($id)
    {
        return $this->ProdiRepo->getDataById($id);
    }
    public function updateData(ProdiRequest $request, $id)
    {
        return $this->ProdiRepo->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->ProdiRepo->deleteData($id);
    }
}
