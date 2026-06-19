import AuthenticatedLayout from "./AuthenticatedLayout";

const DashboardLayout = ({ children }) => {
    return (
        <AuthenticatedLayout>
        <div className="min-h-screen bg-gray-100">
            <sidebar className="bg-white w-64 min-h-screen shadow-md fixed">
                <div className="p-4 border-b border-gray-200 mb-4 flex flex-col gap-4 justify-between">
                    <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                    <nav>
                        <ul>
                            <li className="mb-2">
                                <a href="/projects" className="text-blue-500 hover:underline">Projects</a>
                            </li>
                            <li className="mb-2">
                                <a href="/tasks" className="text-blue-500 hover:underline">Tasks</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </sidebar>
            <main className="ml-64 p-4">
                {children}
            </main>
        </div>
        </AuthenticatedLayout>
    );
};

export default DashboardLayout;