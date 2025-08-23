<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'news';
    protected $fillable = [
        'id',
        'title',
        'description',
        'image',
        'category',
        'created_by',
        'created_at',
        'updated_at'
    ];
}
