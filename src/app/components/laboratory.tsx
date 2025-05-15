"use client";

import React, { useState } from 'react';

interface TestOrder {
  patientSearch: string;
  testType: string;
  priority: 'normal' | 'urgent' | 'emergency';
  notes: string;
}

interface TestResult {
  id: string;
  patientName: string;
  patientId: string;
  testType: string;
  subType?: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
  result?: string;
  imageUrl?: string;
}

const Laboratory = () => {
  const [showNewTestOrderModal, setShowNewTestOrderModal] = useState(false);
  const [testOrderForm, setTestOrderForm] = useState<TestOrder>({
    patientSearch: '',
    testType: '',
    priority: 'normal',
    notes: ''
  });
  const [testOrderErrors, setTestOrderErrors] = useState<Record<string, string>>({});

  const testTypes = [
    { value: 'blood', label: 'Blood Test', subType: 'Complete Blood Count' },
    { value: 'urine', label: 'Urine Analysis', subType: 'Routine Analysis' },
    { value: 'xray', label: 'X-Ray', subType: 'Chest X-Ray' },
    { value: 'mri', label: 'MRI Scan', subType: 'Brain MRI' },
    { value: 'ct', label: 'CT Scan', subType: 'Abdominal CT' }
  ];

  const sampleTestResults: TestResult[] = [
    {
      id: 'T001',
      patientName: 'Emily Davis',
      patientId: 'P-10237',
      testType: 'Blood Test',
      subType: 'Complete Blood Count',
      status: 'pending',
      date: '2024-01-16',
      imageUrl: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=15&orientation=squarish'
    },
    {
      id: 'T002',
      patientName: 'Michael Brown',
      patientId: 'P-10238',
      testType: 'X-Ray',
      subType: 'Chest X-Ray',
      status: 'completed',
      date: '2024-01-15',
      result: 'Normal findings',
      imageUrl: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20business%20casual%2C%20friendly%20smile%2C%20office%20setting%2C%20professional%20headshot&width=40&height=40&seq=16&orientation=squarish'
    },
    {
      id: 'T003',
      patientName: 'Sarah Wilson',
      patientId: 'P-10239',
      testType: 'MRI Scan',
      subType: 'Brain MRI',
      status: 'in-progress',
      date: '2024-01-16',
      imageUrl: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20professional%20attire%2C%20confident%20expression%2C%20studio%20lighting%2C%20corporate%20headshot&width=40&height=40&seq=17&orientation=squarish'
    }
  ];

  const handleTestOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTestOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
    if (testOrderErrors[name]) {
      setTestOrderErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateTestOrder = () => {
    const errors: Record<string, string> = {};
    if (!testOrderForm.patientSearch.trim()) {
      errors.patientSearch = 'Patient ID/Name is required';
    }
    if (!testOrderForm.testType) {
      errors.testType = 'Test type is required';
    }
    return errors;
  };

  const handleTestOrderSubmit = () => {
    const errors = validateTestOrder();
    if (Object.keys(errors).length > 0) {
      setTestOrderErrors(errors);
      return;
    }
    setShowNewTestOrderModal(false);
    setTestOrderForm({
      patientSearch: '',
      testType: '',
      priority: 'normal',
      notes: ''
    });
    setTestOrderErrors({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Laboratory Management</h2>
        <button
          id="newTestOrderBtn"
          onClick={() => setShowNewTestOrderModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-plus mr-2"></i>
          New Test Order
        </button>
      </div>

      {showNewTestOrderModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Create New Test Order</h3>
                <button
                  onClick={() => {
                    setShowNewTestOrderModal(false);
                    setTestOrderForm({
                      patientSearch: '',
                      testType: '',
                      priority: 'normal',
                      notes: ''
                    });
                    setTestOrderErrors({});
                  }}
                  className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form id="testOrderForm" className="space-y-6">
                <div>
                  <label htmlFor="patientSearch" className="block text-sm font-medium text-gray-700">Patient ID/Name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="patientSearch"
                      name="patientSearch"
                      value={testOrderForm.patientSearch}
                      onChange={handleTestOrderChange}
                      className={`block w-full pr-10 pl-4 py-2 border ${testOrderErrors.patientSearch ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Enter patient ID or name"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                  </div>
                  {testOrderErrors.patientSearch && (
                    <p className="mt-1 text-sm text-red-600">{testOrderErrors.patientSearch}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="testType" className="block text-sm font-medium text-gray-700">Test Type</label>
                  <select
                    id="testType"
                    name="testType"
                    value={testOrderForm.testType}
                    onChange={handleTestOrderChange}
                    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${testOrderErrors.testType ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
                  >
                    <option value="">Select Test Type</option>
                    {testTypes.map((test) => (
                      <option key={test.value} value={test.value}>{test.label}</option>
                    ))}
                  </select>
                  {testOrderErrors.testType && (
                    <p className="mt-1 text-sm text-red-600">{testOrderErrors.testType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority Level</label>
                  <select
                    id="priority"
                    name="priority"
                    value={testOrderForm.priority}
                    onChange={handleTestOrderChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={testOrderForm.notes}
                    onChange={handleTestOrderChange}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Add any additional notes..."
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowNewTestOrderModal(false);
                      setTestOrderForm({
                        patientSearch: '',
                        testType: '',
                        priority: 'normal',
                        notes: ''
                      });
                      setTestOrderErrors({});
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleTestOrderSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    Create Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Test Orders</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleTestResults.map((test) => (
                      <tr key={test.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={test.imageUrl} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{test.patientName}</div>
                              <div className="text-sm text-gray-500">{test.patientId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{test.testType}</div>
                          <div className="text-sm text-gray-500">{test.subType}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            test.status === 'completed' ? 'bg-green-100 text-green-800' :
                            test.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <i className="fas fa-upload"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Results</h3>
            <div className="space-y-4">
              {sampleTestResults
                .filter(test => test.status === 'completed')
                .map(test => (
                  <div key={test.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{test.testType}</h4>
                        <p className="text-sm text-gray-500">Patient: {test.patientName}</p>
                        <p className="text-xs text-gray-500">Date: {test.date}</p>
                        {test.result && <p className="text-sm text-gray-700 mt-2">{test.result}</p>}
                      </div>
                      <button className="text-blue-600 hover:text-blue-900">
                        <i className="fas fa-download"></i>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;