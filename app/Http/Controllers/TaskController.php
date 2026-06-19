<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(){
        $tasks = Task::with('project', 'assignedUser')->get();
        return inertia('Tasks/Index', ['tasks' => $tasks]);
    }

    public function create(){
        return inertia('Tasks/Create');
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in-progress,completed',
            'priority' => 'required|in:low,medium,high',
            'project_id' => 'required|exists:projects,id',
            'assigned_to' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date|after_or_equal:today',
        ]);

        Task::create($request->all());
        return redirect()->route('tasks.index');
    }

    public function edit(Task $task){
        return inertia('Tasks/Edit', ['task' => $task]);
    }

    public function update(Request $request, Task $task){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in-progress,completed',
            'priority' => 'required|in:low,medium,high',
            'project_id' => 'required|exists:projects,id',
            'assigned_to' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date|after_or_equal:today',
        ]);

        $task->update($request->all());
        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task){
        $task->delete();
        return redirect()->route('tasks.index');
    }
}
