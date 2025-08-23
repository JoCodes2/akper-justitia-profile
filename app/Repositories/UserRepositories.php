<?php

namespace App\Repositories;


use App\Http\Requests\UserRequest;
use App\Interfaces\UserInterfaces;
use App\Models\User;
use App\Traits\HttpResponseTraits;

class UserRepositories implements UserInterfaces
{
    use HttpResponseTraits;
    protected $User;
    public function __construct(User $User)
    {
        $this->User = $User;
    }
    public function getAllData()
    {
        $data = $this->User->all();
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }

    public function createData(UserRequest $request)
    {
        try {
            $data = new $this->User;
            $data->name = $request->input('name');
            $data->username = $request->input('username');
            $data->password = $request->input('password');
            $data->role = $request->input('role', 'user');
            $data->save();
            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function getDataById($id)
    {
        $data = $this->User->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(UserRequest $request, $id)
    {
        try {
            $data = $this->User->find($id);
            if (!$data) {
                return $this->idOrDataNotFound();
            }
            $data->name = $request->input('name');
            $data->username = $request->input('username');
            $data->password = $request->input('password');
            $data->role = $request->input('role', 'user');
            $data->save();

            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function deleteData($id)
    {
        $data = $this->User->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        $data->delete();

        return $this->delete();
    }
}
