<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaleriModel extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'galerys';
    protected $fillable = [
        'id',
        'name',
        'image',
        'date_upload',
        'created_by',
    ];
}
