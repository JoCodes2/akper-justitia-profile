<?php

namespace App\Repositories;

use App\Helpers\FileUploadHendler;
use App\Http\Requests\LeaderRequest;
use App\Interfaces\LeaderInterfaces;
use App\Models\LeaderModel;
use App\Traits\HttpResponseTraits;

class LeaderRepositories implements LeaderInterfaces
{
    use HttpResponseTraits;
    protected $leaderModel;
    public function __construct(LeaderModel $leaderModel)
    {
        $this->leaderModel = $leaderModel;
    }
    public function getAllData()
    {
        $data = $this->leaderModel->all();
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }
    public function createData(LeaderRequest $request)
    {
        try {
            $data = new $this->leaderModel;
            $data->name = $request->input('name');
            $data->nip = $request->input('nip');
            $data->position = $request->input('position');
            if ($request->hasFile('image')) {
                $fileName = FileUploadHendler::uploadFile(
                    $request->file('image'),
                    'uploads/leader',
                    'image_'
                );
                $data->image = $fileName;
            }

            $data->save();
            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function getDataById($id)
    {
        $data = $this->leaderModel->find($id);
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(LeaderRequest $request, $id)
    {
        try {
            $data = $this->leaderModel->find($id);
            if (!$data) {
                return $this->dataNotFound();
            }
            $data->name = $request->input('name');
            $data->nip = $request->input('nip');
            $data->position = $request->input('position');
            if ($request->hasFile('image')) {
                $fileName = FileUploadHendler::updateFile(
                    $request->file('image'),
                    'uploads/leader',
                    'image_',
                    $data->image
                );
                $data->image = $fileName;
            }
            $data->save();
            return $this->success($data);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 400, $th, class_basename($this), __FUNCTION__);
        }
    }
    public function deleteData($id)
    {
        $data = $this->leaderModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        if (!empty($data->image)) {
            FileUploadHendler::deleteFile('uploads/leader', $data->image);
        }

        $data->delete();

        return $this->delete();
    }
}
