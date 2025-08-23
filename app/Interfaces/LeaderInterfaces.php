<?php

namespace App\Interfaces;

use App\Http\Requests\LeaderRequest;

interface LeaderInterfaces
{
    public function getAllData();
    public function createData(LeaderRequest $request);
    public function getDataById($id);
    public function updateData(LeaderRequest $request, $id);
    public function deleteData($id);
}
