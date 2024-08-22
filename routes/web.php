<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\DatabaseBackup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BackupController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $users = User::where('id', '!=', Auth::id())->simplePaginate(10);

    return Inertia::render('Dashboard', ['users' => $users]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/system-maintenance', function () {
        return Inertia::render('BackupDatabase');
    });

    Route::post('/backup', [BackupController::class, 'backup']);

    Route::get('/download-backup/{path}', function($path) {
        return response()->download(storage_path("app/$path"));
    });

    Route::get('/get-backups', function() {
        return DatabaseBackup::all();
    });

    Route::post('/delete-backup', [BackupController::class, 'deleteBackup']);
});

require __DIR__.'/auth.php';
