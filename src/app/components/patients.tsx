"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface PatientForm {
  fullName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  medicalHistory: string;
  insuranceProvider: string;
  insuranceNumber: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const Patients = () => {
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [newPatientForm, setNewPatientForm] = useState<PatientForm>({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: '',
    insuranceProvider: '',
    insuranceNumber: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handlePatientFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPatientForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddPatient = () => {
    setShowAddPatientModal(false);
    setNewPatientForm({
      fullName: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      medicalHistory: '',
      insuranceProvider: '',
      insuranceNumber: '',
      emergencyContact: '',
      emergencyPhone: ''
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Management</h2>
        <button
          onClick={() => setShowAddPatientModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add New Patient
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="discharged">Discharged</option>
              <option value="scheduled">Scheduled</option>
            </select>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=10&orientation=squarish" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Robert Fox</div>
                      <div className="text-sm text-gray-500">42 years, Male</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">P-10234</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">+1 (555) 123-4567</div>
                  <div className="text-sm text-gray-500">robert.fox@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 4, 2025</div>
                  <div className="text-sm text-gray-500">Cardiology</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=11&orientation=squarish" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                      <div className="text-sm text-gray-500">35 years, Female</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">P-10235</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">+1 (555) 234-5678</div>
                  <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 4, 2025</div>
                  <div className="text-sm text-gray-500">Neurology</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    In Treatment
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20an%20elderly%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=12&orientation=squarish" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Michael Wilson</div>
                      <div className="text-sm text-gray-500">68 years, Male</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">P-10236</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">+1 (555) 345-6789</div>
                  <div className="text-sm text-gray-500">michael.wilson@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 3, 2025</div>
                  <div className="text-sm text-gray-500">Orthopedics</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Scheduled
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%20with%20glasses%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=13&orientation=squarish" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Emily Davis</div>
                      <div className="text-sm text-gray-500">29 years, Female</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">P-10237</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">+1 (555) 456-7890</div>
                  <div className="text-sm text-gray-500">emily.davis@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 2, 2025</div>
                  <div className="text-sm text-gray-500">Pediatrics</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=14&orientation=squarish" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">45 years, Female</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">P-10238</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">+1 (555) 567-8901</div>
                  <div className="text-sm text-gray-500">sarah.johnson@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 1, 2025</div>
                  <div className="text-sm text-gray-500">General Medicine</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Discharged
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">42</span> patients
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      {showAddPatientModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Patient</h3>
              <div className="mt-2 space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={newPatientForm.fullName}
                  onChange={handlePatientFormChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="age"
                    value={newPatientForm.age}
                    onChange={handlePatientFormChange}
                    placeholder="Age"
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    name="gender"
                    value={newPatientForm.gender}
                    onChange={handlePatientFormChange}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={newPatientForm.phone}
                  onChange={handlePatientFormChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={newPatientForm.email}
                  onChange={handlePatientFormChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="address"
                  value={newPatientForm.address}
                  onChange={handlePatientFormChange}
                  placeholder="Address"
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="medicalHistory"
                  value={newPatientForm.medicalHistory}
                  onChange={handlePatientFormChange}
                  placeholder="Medical History"
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="insuranceProvider"
                  value={newPatientForm.insuranceProvider}
                  onChange={handlePatientFormChange}
                  placeholder="Insurance Provider"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="insuranceNumber"
                  value={newPatientForm.insuranceNumber}
                  onChange={handlePatientFormChange}
                  placeholder="Insurance Number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="emergencyContact"
                  value={newPatientForm.emergencyContact}
                  onChange={handlePatientFormChange}
                  placeholder="Emergency Contact Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={newPatientForm.emergencyPhone}
                  onChange={handlePatientFormChange}
                  placeholder="Emergency Contact Phone"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddPatientModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPatient}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Patient
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;