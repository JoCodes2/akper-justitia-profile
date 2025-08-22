<?php

namespace App\Repositories;

use App\Helpers\FileUploadHendler;
use App\Http\Requests\ProfileRequest;
use App\Interfaces\ProfileInterfaces;
use App\Models\ProfileModel;
use App\Traits\HttpResponseTraits;

class ProfileRepositories implements ProfileInterfaces
{
    use HttpResponseTraits;
    protected $profileModel;
    public function __construct(ProfileModel $profileModel)
    {
        $this->profileModel = $profileModel;
    }
    public function getAllData()
    {
        $data = $this->profileModel->all();
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }

    public function createData(ProfileRequest $request)
    {
        try {
            $data = new $this->profileModel;
            $data->vision = $request->input('vision');
            $data->mission = $request->input('mission');
            $data->vision2 = $request->input('vision2');
            $data->mission2 = $request->input('mission2');
            $data->history = $request->input('history');
            if ($request->hasFile('structure')) {
                $fileName = FileUploadHendler::uploadFile(
                    $request->file('structure'),
                    'uploads/profile',
                    'structure_'
                );
                $data->structure = $fileName;
            }

            $data->save();
            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function getDataById($id)
    {
        $data = $this->profileModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(ProfileRequest $request, $id)
    {
        try {
            $data = $this->profileModel->find($id);
            if (!$data) {
                return $this->idOrDataNotFound();
            }
            $data->vision = $request->input('vision');
            $data->mission = $request->input('mission');
            $data->history = $request->input('history');
            if ($request->hasFile('structure')) {
                $fileName = FileUploadHendler::updateFile(
                    $request->file('structure'),
                    'uploads/profile',
                    'structure_',
                    $data->structure
                );
                $data->structure = $fileName;
            }

            $data->save();

            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function deleteData($id)
    {
        $data = $this->profileModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        if (!empty($data->structure)) {
            FileUploadHendler::deleteFile('uploads/profile', $data->structure);
        }

        $data->delete();

        return $this->delete();
    }
}
