<?php

namespace App\Models;

use App\Casts\HumanReadableTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DatabaseBackup extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'path',
    ];

    protected $casts = [
        'created_at' => HumanReadableTime::class,
        'updated_at' => HumanReadableTime::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
