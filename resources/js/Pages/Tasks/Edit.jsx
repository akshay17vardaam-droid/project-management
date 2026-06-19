import DashboardLayout from "@/Layouts/DashboardLayout";

const EditTask = ({ task, projects, users}) => {
    return (
        <DashboardLayout>
        <div>
            <h1>edit task</h1>
            <form method="post" action={`/tasks/${task.id}`} className="w-full max-w-lg flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                <input type="text" name="title" placeholder="Task Title" defaultValue={task.title} className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <textarea name="description" placeholder="Task Description" defaultValue={task.description} className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <select name="project_id" defaultValue={task.project_id} className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {projects.map(project => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>
                <select name="assigned_user_id" defaultValue={task.assigned_user_id} className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Unassigned</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    update task
                </button>
            </form>
        </div> 
        </DashboardLayout>
    );
};

export default EditTask;