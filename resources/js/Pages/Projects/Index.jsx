import DashboardLayout from "@/Layouts/DashboardLayout";

const Index = ({ projects }) => {
    return (
        <DashboardLayout>
        <div className = "container mx-auto px-4 py-8">
            <h1 className = "text-2xl font-bold mb-4">Projects</h1>
            <ul className = "list-disc pl-5">
                {projects.map(project => (
                    <li className = "mb-2" key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
        </DashboardLayout>
    );
};

export default Index;