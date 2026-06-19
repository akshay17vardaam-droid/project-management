<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'description', 'status', 'start_date', 'end_date', 'created_by'])]
class Project extends Model
{
    public function tasks(){
        return $this->hasmany(Task::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
