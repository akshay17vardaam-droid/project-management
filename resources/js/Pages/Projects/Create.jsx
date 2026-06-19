import DashboardLayout from "@/Layouts/DashboardLayout";

const Create = () => {
    return (
        <DashboardLayout>
            <div className="container mx-auto px-4 py-8 justify-top items-center flex flex-col h-screen">
                <h1 className="text-2xl font-bold mb-4">create project</h1>
                <form method="post" ation="/projects" className="w-full max-w-lg flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                    <input type="text" name="name"
                        placeholder="Project Name"
                        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="description"
                        placeholder="Project Description"
                        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="status"
                        placeholder="project status"
                        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="flex gap-4 justify-between items-center">
                        <input type="date" name="start_date"
                            placeholder="start date"
                            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="date" name="end_date"
                            placeholder="end date"
                            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create Project
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default Create;