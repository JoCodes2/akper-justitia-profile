<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileModel extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'profiles';
    protected $fillable = [
        'id',
        'vision',
        'mission',
        'history',
        'structure',
        'created_at',
        'updated_at',
    ];
}
