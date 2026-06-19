<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable(['title', 'description', 'status', 'priority', 'project_id', 'assigned_to', 'due_date'])]
class Task extends Model
{
    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function assignedUser(){
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
