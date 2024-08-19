<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessDbBackup;
use App\Models\DatabaseBackup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BackupController extends Controller
{
    /**
     * Perform backup and saves the gzip to the file storage.
     */
    public function backup()
    {
        // We will put the backup process in the queue for background processing.
        $user_id = Auth::id();
        ProcessDbBackup::dispatch($user_id);
    }

    public function deleteBackup(Request $request): void
    {
        DatabaseBackup::destroy($request->id);
        unlink(storage_path('app/'. $request->backup_file));
    }
}
