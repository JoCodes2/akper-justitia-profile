<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdiModel extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'prodi';
    protected $fillable = [
        'id',
        'name',
        'level',
        'accreditation',
        'description',
        'created_at',
        'updated_at',
    ];
}
