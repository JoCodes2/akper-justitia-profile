<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\GaleriRequest;
use App\Repositories\GaleriRepositories;
use Illuminate\Http\Request;

class GaleriController extends Controller
{
     protected $galeriRepo;

    public function __construct(galeriRepositories $galeriRepo)
    {
        $this->galeriRepo = $galeriRepo;
    }
    public function getAllData()
    {
        return $this->galeriRepo->getAllData();
    }
    public function getDataById($id)
    {
        return $this->galeriRepo->getDataById($id);
    }
    public function createData(GaleriRequest $request)
    {
        return $this->galeriRepo->createData($request);
    }
    public function updateData(GaleriRequest $request, $id)
    {
        return $this->galeriRepo->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->galeriRepo->deleteData($id);
    }
}
