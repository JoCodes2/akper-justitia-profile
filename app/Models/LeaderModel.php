<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaderModel extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'leaders';
    protected $fillable = [
        'id',
        'name',
        'nip',
        'position',
        'image',
        'created_at',
        'updated_at',
    ];
}
