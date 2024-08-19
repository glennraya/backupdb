<?php

namespace App\Concerns;

use Illuminate\Support\Str;
use App\Models\DatabaseBackup;
use Illuminate\Support\Facades\Log;

trait BackupDatabase
{
    protected function performBackup(int $user_id)
    {
        try {
            // Database credentials
            $database = config('database.connections.mysql.database');
            $username = config('database.connections.mysql.username');
            $password = config('database.connections.mysql.password');
            $host = config('database.connections.mysql.host');
            $port = config('database.connections.mysql.port');

            // Backup file name (compressed)
            $gzip_file_name = $database.'_backup_'.Str::random(8).'.sql.gz';
            $gzip_file_path = storage_path("app/$gzip_file_name");

            DatabaseBackup::create(['path' => $gzip_file_name, 'user_id' => $user_id]);

            // Log the start of the process
            Log::info("Starting backup for user $user_id to $gzip_file_path");

            // MySQL dump command, streamed directly into gzip
            $backup_cmd = "/opt/homebrew/bin/mysqldump --user=$username --password=$password --host=$host --port=$port --single-transaction --quick --lock-tables=false $database | gzip > $gzip_file_path";

            // Execute the command
            exec($backup_cmd, $output, $result);

            if ($result) {
                Log::error("Backup failed for user $user_id: " . implode("\n", $output));
                throw new \Exception('Database backup failed.');
            }

            // Log successful completion
            Log::info("Backup completed for user $user_id, stored at $gzip_file_path");

            return $gzip_file_name;

        } catch (\Exception $e) {
            // Handle or rethrow the exception
            Log::error("Backup process failed for user $user_id: " . $e->getMessage());
            throw $e;
        }
    }

}
