<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('backup.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
