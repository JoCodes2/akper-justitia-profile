<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
