<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Repositories\UserRepositories;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $user;
    public function __construct(UserRepositories $user)
    {
        $this->user = $user;
    }
    public function getAllData()
    {
        return $this->user->getAllData();
    }
    public function createData(UserRequest $request)
    {
        return $this->user->createData($request);
    }
    public function getDataById($id)
    {
        return $this->user->getDataById($id);
    }
    public function updateData(UserRequest $request, $id)
    {
        return $this->user->updateData($request, $id);
    }
    public function deleteData($id)
    {
        return $this->user->deleteData($id);
    }
}
