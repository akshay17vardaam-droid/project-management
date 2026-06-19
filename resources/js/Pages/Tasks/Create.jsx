import DashboardLayout from "@/Layouts/DashboardLayout";

const CreateTask = () => {
    return (
        <DashboardLayout>
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6">Create Task</h1>
            <form method="post" action="/tasks" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input type="text" name="title" placeholder="Task Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea name="description" placeholder="Task Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Task
                </button>
            </form>
        </div>
        </DashboardLayout>
    );
};

export default CreateTask;