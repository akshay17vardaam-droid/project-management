import DashboardLayout from "@/Layouts/DashboardLayout";

const Index = ({ tasks }) => {
    return (
        <DashboardLayout>
            <div className = "container mx-auto px-4 py-8">
                <h1 className = "text-2xl font-bold mb-4">Tasks</h1>
                <ul className = "list-disc pl-5">
                    {tasks.map(task => (
                        <li className = "mb-2" key={task.id}>
                            <strong>{task.title}</strong> - {task.project.name} - Assigned to: {task.assignedUser ? task.assignedUser.name : 'Unassigned'}
                        </li>
                    ))}
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default Index;