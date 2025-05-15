import React, { useState } from 'react';

interface DoctorForm {
  name: string;
  department: string;
  specialization: string;
  qualifications: string;
  experience: string;
  phone: string;
  email: string;
  profilePhoto: File | null;
}

const Doctors = () => {
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [newDoctorForm, setNewDoctorForm] = useState<DoctorForm>({
    name: '',
    department: '',
    specialization: '',
    qualifications: '',
    experience: '',
    phone: '',
    email: '',
    profilePhoto: null
  });
  
  const handleDoctorFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewDoctorForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      setNewDoctorForm(prev => ({
        ...prev,
        profilePhoto: file
      }));
    }
  };
  
  const handleAddDoctor = () => {
    // Here you would typically send the data to your backend
    // For now, we'll just close the modal and reset the form
    setShowAddDoctorModal(false);
    setNewDoctorForm({
      name: '',
      department: '',
      specialization: '',
      qualifications: '',
      experience: '',
      phone: '',
      email: '',
      profilePhoto: null
    });
  };
  
  const departments = [
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'general', name: 'General Medicine' }
  ];
  
  const doctors = [
    { id: 'dr-smith', name: 'Dr. John Smith', department: 'cardiology', img: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20doctor%20with%20stethoscope%2C%20wearing%20white%20coat%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20medical%20professional&width=100&height=100&seq=1&orientation=squarish' },
    { id: 'dr-johnson', name: 'Dr. Sarah Johnson', department: 'neurology', img: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20doctor%20with%20stethoscope%2C%20wearing%20white%20coat%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20medical%20professional&width=100&height=100&seq=2&orientation=squarish' },
    { id: 'dr-patel', name: 'Dr. Raj Patel', department: 'orthopedics', img: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20Indian%20doctor%20with%20stethoscope%2C%20wearing%20white%20coat%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20medical%20professional&width=100&height=100&seq=3&orientation=squarish' },
    { id: 'dr-chen', name: 'Dr. Lisa Chen', department: 'pediatrics', img: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20Asian%20female%20doctor%20with%20stethoscope%2C%20wearing%20white%20coat%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20medical%20professional&width=100&height=100&seq=4&orientation=squarish' },
    { id: 'dr-wilson', name: 'Dr. Michael Wilson', department: 'general', img: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20doctor%20with%20stethoscope%2C%20wearing%20white%20coat%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20medical%20professional&width=100&height=100&seq=5&orientation=squarish' }
  ];

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Doctor Management</h2>
        <button
          id="addDoctorBtn"
          onClick={() => setShowAddDoctorModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-user-plus mr-2"></i>
          Add New Doctor
        </button>
        {showAddDoctorModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Add New Doctor</h3>
                  <button
                    onClick={() => setShowAddDoctorModal(false)}
                    className="text-gray-400 hover:text-gray-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form id="addDoctorForm" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="doctorName"
                        name="name"
                        value={newDoctorForm.name}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                      <select
                        id="doctorDepartment"
                        name="department"
                        value={newDoctorForm.department}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                      <input
                        type="text"
                        id="doctorSpecialization"
                        name="specialization"
                        value={newDoctorForm.specialization}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications</label>
                      <input
                        type="text"
                        id="doctorQualifications"
                        name="qualifications"
                        value={newDoctorForm.qualifications}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (years)</label>
                      <input
                        type="number"
                        id="doctorExperience"
                        name="experience"
                        value={newDoctorForm.experience}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="doctorPhone"
                        name="phone"
                        value={newDoctorForm.phone}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="doctorEmail"
                        name="email"
                        value={newDoctorForm.email}
                        onChange={handleDoctorFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">Profile Photo</label>
                      <input
                        type="file"
                        id="doctorProfilePhoto"
                        name="profilePhoto"
                        onChange={handleProfilePhotoChange}
                        accept="image/*"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddDoctorModal(false);
                        setNewDoctorForm({
                          name: '',
                          department: '',
                          specialization: '',
                          qualifications: '',
                          experience: '',
                          phone: '',
                          email: '',
                          profilePhoto: null
                        });
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out">
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleAddDoctor}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      Save Doctor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </button>
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-sort mr-2"></i>
                Sort
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16">
                      <img className="h-16 w-16 rounded-full object-cover" src={doctor.img} alt={doctor.name} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">{departments.find(d => d.id === doctor.department)?.name}</p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <i className="fas fa-graduation-cap mr-2 text-blue-600"></i>
                      MD - General Medicine
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                      15 years experience
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-star mr-2 text-yellow-400"></i>
                      4.8 (120 reviews)
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      Schedule
                    </button>
                    <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-user-edit mr-2"></i>
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">32</span> doctors
              </p>
            </div>
            <div className="flex justify-between">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;