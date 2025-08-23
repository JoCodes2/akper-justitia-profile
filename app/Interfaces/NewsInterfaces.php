<?php

namespace App\Interfaces;

use App\Http\Requests\NewsRequest;

interface NewsInterfaces
{
    public function getAllData();
    public function createData(NewsRequest $request);
    public function getDataById($id);
    public function updateData(NewsRequest $request, $id);
    public function deleteData($id);
}
