<?php

namespace App\Repositories;

use App\Helpers\FileUploadHendler;
use App\Http\Requests\NewsRequest;
use App\Interfaces\NewsInterfaces;
use App\Models\NewsModel;
use App\Traits\HttpResponseTraits;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class NewsRepositories implements NewsInterfaces
{
    use HttpResponseTraits;
    protected $newsModel;
    public function __construct(NewsModel $newsModel)
    {
        $this->newsModel = $newsModel;
    }
    public function getAllData()
    {
        $data = $this->newsModel->with('user')->get();;
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }
    public function createData(NewsRequest $request)
    {
        try {
            $user = Auth::user();
            $data = new $this->newsModel;
            $data->title = $request->input('title');
            $data->description = $request->input('description');
            $data->category = $request->input('category');
            $data->created_by = $user->id;

            $data->date_upload = $request->input('date_upload');
            if ($request->hasFile('image')) {
                $fileName = FileUploadHendler::uploadFile(
                    $request->file('image'),
                    'uploads/news',
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
        $data = $this->newsModel::find($id);
        if (!$data) {
            return $this->dataNotFound();
        }
        return $this->success($data);
    }
    public function updateData(NewsRequest $request, $id)
    {
        try {
            $user = Auth::user();
            $data = $this->newsModel->find($id);
            if (!$data) {
                return $this->idOrDataNotFound();
            }
            $data->title = $request->input('title');
            $data->description = $request->input('description');
            $data->category = $request->input('category');
            $data->created_by = $user->id;
            $data->date_upload = $request->input('date_upload');
            if ($request->hasFile('image')) {
                $fileName = FileUploadHendler::updateFile(
                    $request->file('image'),
                    'uploads/news',
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
        $data = $this->newsModel->find($id);
        if (!$data) {
            return $this->idOrDataNotFound();
        }
        if (!empty($data->image)) {
            FileUploadHendler::deleteFile('uploads/news', $data->image);
        }

        $data->delete();

        return $this->delete();
    }
}
