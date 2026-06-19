<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(){
        $projects = Project::all();
        return inertia('Projects/Index', ['projects' => $projects]);
    }

    public function create(){
        return inertia('Projects/Create');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:active,completed,on-hold',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        Project::create($request->all());

        return redirect()->route('projects.index');
    }

    public function edit(Project $project){
        return inertia('Projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:active,completed,on-hold',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        $project->update($request->all());

        return redirect()->route('projects.index');
    }

    public function destroy(Project $project){
        $project->delete();
        return redirect()->route('projects.index');
    }
}
