<?php

namespace App\Interfaces;

use App\Http\Requests\ProfileRequest;

interface ProfileInterfaces
{
    public function getAllData();
    public function createData(ProfileRequest $request);
    public function getDataById($id);
    public function updateData(ProfileRequest $request, $id);
    public function deleteData($id);
}
