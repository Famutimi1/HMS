import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const Dashboard = () => {
  // Initialize charts after component mounts
  useEffect(() => {
    // Patient visits chart
    const visitsChart = echarts.init(document.getElementById('visits-chart') as HTMLElement);
    const visitsOption: EChartsOption = {
      animation: false,
      title: {
        text: 'Daily Patient Visits',
        left: 'center',
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 132, 101, 134, 90, 70, 85],
          type: 'line',
          smooth: true,
          color: '#2563EB'
        }
      ]
    };
    visitsChart.setOption(visitsOption);
    
    // Revenue chart
    const revenueChart = echarts.init(document.getElementById('revenue-chart') as HTMLElement);
    const revenueOption: EChartsOption = {
      animation: false,
      title: {
        text: 'Monthly Revenue',
        left: 'center',
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [25000, 28000, 32000, 35000, 38000, 42000],
          type: 'bar',
          color: '#2563EB'
        }
      ]
    };
    revenueChart.setOption(revenueOption);
    
    // Department distribution chart
    const deptChart = echarts.init(document.getElementById('dept-chart') as HTMLElement);
    const deptOption: EChartsOption = {
      animation: false,
      title: {
        text: 'Department Distribution',
        left: 'center',
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          fontSize: 12
        }
      },
      series: [
        {
          name: 'Department',
          type: 'pie',
          radius: '70%',
          data: [
            { value: 335, name: 'Cardiology' },
            { value: 310, name: 'Neurology' },
            { value: 234, name: 'Orthopedics' },
            { value: 135, name: 'Pediatrics' },
            { value: 1548, name: 'General Medicine' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          color: ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']
        }
      ]
    };
    deptChart.setOption(deptOption);
    
    // Handle resize
    const handleResize = () => {
      visitsChart.resize();
      revenueChart.resize();
      deptChart.resize();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      visitsChart.dispose();
      revenueChart.dispose();
      deptChart.dispose();
    };
  }, []);

  return (
    <div>
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Hospital Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Last updated: May 4, 2025, 10:30 AM</span>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <i className="fas fa-sync-alt text-gray-600"></i>
                    </button>
                </div>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-user-injured text-xl"></i>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Total Patients</p>
                                <p className="text-2xl font-semibold text-gray-800">1,284</p>
                            </div>
                        </div>
                        <div className="text-xs text-gray-400">YTD</div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-green-500 text-sm font-medium">
                                    <i className="fas fa-arrow-up mr-1"></i>
                                    12.5%
                                </span>
                                <span className="text-gray-500 text-sm ml-2">from last month</span>
                            </div>
                            <span className="text-sm text-gray-500">Target: 1,500</span>
                        </div>
                        <div className="mt-2 h-1 bg-gray-200 rounded-full">
                            <div className="h-1 bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <i className="fas fa-calendar-check text-xl"></i>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Appointments</p>
                                <p className="text-2xl font-semibold text-gray-800">152</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">Today: 48</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-xs text-gray-500">Pending: 104</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-gray-400">This Week</div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-green-500 text-sm font-medium">
                                    <i className="fas fa-arrow-up mr-1"></i>
                                    8.2%
                                </span>
                                <span className="text-gray-500 text-sm ml-2">from yesterday</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock text-gray-400 mr-1"></i>
                                <span className="text-sm text-gray-500">Peak: 2-4 PM</span>
                            </div>
                        </div>
                        <div className="mt-2 h-1 bg-gray-200 rounded-full">
                            <div className="h-1 bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                <i className="fas fa-user-md text-xl"></i>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Doctors</p>
                                <p className="text-2xl font-semibold text-gray-800">32</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">Active: 28</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-xs text-gray-500">On Leave: 4</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-400">Departments</div>
                            <div className="text-sm font-medium text-gray-600 mt-1">5 Active</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-green-500 text-sm font-medium">
                                    <i className="fas fa-arrow-up mr-1"></i>
                                    3.1%
                                </span>
                                <span className="text-gray-500 text-sm ml-2">new hires</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-briefcase text-gray-400 mr-1"></i>
                                <span className="text-sm text-gray-500">2 Positions Open</span>
                            </div>
                        </div>
                        <div className="mt-2 h-1 bg-gray-200 rounded-full">
                            <div className="h-1 bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                <i className="fas fa-dollar-sign text-xl"></i>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Revenue</p>
                                <p className="text-2xl font-semibold text-gray-800">$42,389</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">Services: $32,145</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-xs text-gray-500">Pharmacy: $10,244</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-400">Monthly Goal</div>
                            <div className="text-sm font-medium text-gray-600 mt-1">$50,000</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-green-500 text-sm font-medium">
                                    <i className="fas fa-arrow-up mr-1"></i>
                                    7.4%
                                </span>
                                <span className="text-gray-500 text-sm ml-2">from last month</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-chart-line text-gray-400 mr-1"></i>
                                <span className="text-sm text-gray-500">85% of goal</span>
                            </div>
                        </div>
                        <div className="mt-2 h-1 bg-gray-200 rounded-full">
                            <div className="h-1 bg-yellow-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <div id="visits-chart" style={{ height: '300px' }}></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <div id="revenue-chart" style={{ height: '300px' }}></div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
                    <div id="dept-chart" style={{ height: '300px' }}></div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Patients</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=7&orientation=squarish" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Robert Fox</div>
                                                <div className="text-sm text-gray-500">ID: P-10234</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Dr. John Smith</div>
                                        <div className="text-sm text-gray-500">Cardiology</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Cardiology</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">May 4, 2025</div>
                                        <div className="text-sm text-gray-500">09:30 AM</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=8&orientation=squarish" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                                <div className="text-sm text-gray-500">ID: P-10235</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Dr. Sarah Johnson</div>
                                        <div className="text-sm text-gray-500">Neurology</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Neurology</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">May 4, 2025</div>
                                        <div className="text-sm text-gray-500">10:00 AM</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20an%20elderly%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=9&orientation=squarish" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Michael Wilson</div>
                                                <div className="text-sm text-gray-500">ID: P-10236</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Dr. Raj Patel</div>
                                        <div className="text-sm text-gray-500">Orthopedics</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Orthopedics</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">May 4, 2025</div>
                                        <div className="text-sm text-gray-500">11:30 AM</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Scheduled
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default Dashboard;