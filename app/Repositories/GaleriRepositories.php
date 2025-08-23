<?php

namespace App\Repositories;

use App\Helpers\FileUploadHendler;
use App\Http\Requests\GaleriRequest;
use App\Interfaces\GaleriInterfaces;
use App\Models\GaleriModel;
use App\Traits\HttpResponseTraits;
use Carbon\Carbon;

class GaleriRepositories implements GaleriInterfaces
{
    use HttpResponseTraits;
    protected $GaleriModel;
    public function __construct(GaleriModel $GaleriModel)
    {
        $this->GaleriModel = $GaleriModel;
    }
    public function getAllData()
    {
        $data = $this->GaleriModel->all();
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }

    public function createData(GaleriRequest $request)
    {
        try {
            $data = new $this->GaleriModel;
            $data->name = $request->input('name');
            $data->date_upload = Carbon::now();
            $data->created_by = $request->input('created_by');

            if ($request->hasFile('image')) {
                $fileName = FileUploadHendler::uploadFile(
                    $request->file('image'),
                    'uploads/galeri',
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
        $data = $this->GaleriModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(GaleriRequest $request, $id)
    {
        try {
            $data = $this->GaleriModel->find($id);
            if (!$data) {
                return $this->idOrDataNotFound();
            }
            $data->name = $request->input('name');
            $data->date_upload = Carbon::now();
            $data->created_by = $request->input('created_by');

            if ($request->hasFile('image')) {
                // Hapus file lama jika ada
                if (!empty($data->image)) {
                    FileUploadHendler::deleteFile('uploads/galeri', $data->image);
                }

                $fileName = FileUploadHendler::uploadFile(
                    $request->file('image'),
                    'uploads/galeri',
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
    public function deleteData($id)
    {
        $data = $this->GaleriModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        if (!empty($data->image)) {
            FileUploadHendler::deleteFile('uploads/galeri', $data->image);
        }

        $data->delete();

        return $this->delete();
    }
}
