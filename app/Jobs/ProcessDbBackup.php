<?php

namespace App\Jobs;

use App\Concerns\BackupDatabase;
use App\Events\BackupCompleted;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessDbBackup implements ShouldQueue
{
    use Queueable, BackupDatabase;

    public $timeout = 300; // 5 minutes

    /**
     * Create a new job instance.
     */
    public function __construct(public int $user_id)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $backup_file = $this->performBackup($this->user_id);

            broadcast(new BackupCompleted($this->user_id, 'The database has been successfully backed up.', $backup_file));
        } catch (\Exception $e) {
            broadcast(new BackupCompleted($this->user_id, 'An error has occurred: ' . $e->getMessage(), $backup_file));
        }
    }
}
