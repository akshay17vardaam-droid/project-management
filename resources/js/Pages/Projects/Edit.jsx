import DashboardLayout from "@/Layouts/DashboardLayout";

const Edit = () =>{
    return (
        <DashboardLayout>
        <div>
            <h1>edit project</h1>
            <form method="post" action="/projects" className="w-full max-w-lg flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                <input type="text" name="name" placeholder="Project Name" className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="text" name="description" placeholder="Project Description" className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="text" name="status" placeholder="project status" className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <div className="flex gap-4 justify-between items-center">
                    <input type="date" name="start_date" placeholder="start date" className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="date" name="end_date" placeholder="end date" className = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    update project
                </button>
            </form>
        </div> 
        </DashboardLayout>
    );
}