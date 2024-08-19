<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\ProcessDbBackup;
use App\Concerns\BackupDatabase;
use App\Models\DatabaseBackup;
use Illuminate\Support\Facades\Auth;

class BackupController extends Controller
{
    use BackupDatabase;

    /**
     * Perform backup and saves the gzip to the file storage.
     */
    public function backup(): void
    {
        $user_id = Auth::id();
        ProcessDbBackup::dispatch($user_id);
    }

    /**
     * Delete backup
     */
    public function deleteBackup(Request $request): void
    {
        DatabaseBackup::destroy($request->id);
        unlink(storage_path('app/' . $request->backup_file));
    }
}
