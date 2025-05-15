const Discharge = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Patient Discharge Management</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Pending Discharges</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=18&orientation=squarish" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">Robert Fox</div>
                                                        <div className="text-sm text-gray-500">P-10234</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Cardiology</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Dr. John Smith</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    Pending Approval
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    <i className="fas fa-check"></i>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Discharge Summary</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-sm font-medium text-gray-900">Today's Discharges</p>
                                        <span className="text-2xl font-bold text-blue-600">3</span>
                                    </div>
                                    <div className="h-1 bg-blue-200 rounded-full">
                                        <div className="w-3/4 h-1 bg-blue-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-file-medical mb-2 text-blue-600"></i>
                                    <span className="block">Generate Summary</span>
                                </button>
                                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-print mb-2 text-blue-600"></i>
                                    <span className="block">Print Documents</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discharge