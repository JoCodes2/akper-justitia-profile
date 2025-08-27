<?php

namespace App\Repositories;

use App\Helpers\FileUploadHendler;
use App\Http\Requests\ProdiRequest;
use App\Http\Requests\ProfileRequest;
use App\Interfaces\ProdiInterfaces;
use App\Interfaces\ProfileInterfaces;
use App\Models\ProdiModel;
use App\Models\ProfileModel;
use App\Traits\HttpResponseTraits;

class ProdiRepositories implements ProdiInterfaces
{
    use HttpResponseTraits;
    protected $ProdiModel;
    public function __construct(ProdiModel $ProdiModel)
    {
        $this->ProdiModel = $ProdiModel;
    }
    public function getAllData()
    {
        $data = $this->ProdiModel->all();
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }

    public function createData(ProdiRequest $request)
    {
        try {
            $data = new $this->ProdiModel;
            $data->name = $request->input('name');
            $data->level = $request->input('level');
            $data->accreditation = $request->input('accreditation');
            $data->description = $request->input('description');

            $data->save();
            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function getDataById($id)
    {
        $data = $this->ProdiModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(ProdiRequest $request, $id)
    {
        try {
            $data = $this->ProdiModel->find($id);
            if (!$data) {
                return $this->idOrDataNotFound();
            }
            $data->name = $request->input('name');
            $data->level = $request->input('level');
            $data->accreditation = $request->input('accreditation');
            $data->description = $request->input('description');

            $data->save();

            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }

    public function deleteData($id)
    {
        $data = $this->ProdiModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        $data->delete();

        return $this->delete();
    }
}
