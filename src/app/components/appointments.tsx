import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Appointments = () => {
    const [showAppointmentSuccess, setShowAppointmentSuccess] = useState(false);
    const [appointmentToken, setAppointmentToken] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    // Form state
    const [formData, setFormData] = useState({
      fullName: '',
      age: '',
      gender: '',
      address: '',
      phone: '',
      email: '',
      emergencyContact: '',
      medicalHistory: ''
    });

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

    const timeSlots = [
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM'
    ];

    const filteredDoctors = selectedDepartment
      ? doctors.filter(doctor => doctor.department === selectedDepartment)
      : doctors;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const handleAppointmentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Generate random token
      const token = `#A${Math.floor(100 + Math.random() * 900)}`;
      setAppointmentToken(token);
      setShowAppointmentSuccess(true);
    };
    const resetAppointmentForm = () => {
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        address: '',
        phone: '',
        email: '',
        emergencyContact: '',
        medicalHistory: ''
      });
      setSelectedDepartment('');
      setSelectedDoctor('');
      setSelectedDate('');
      setSelectedTime('');
      setShowAppointmentSuccess(false);
    };



    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Registration & Appointment Booking</h2>
            {showAppointmentSuccess ? (
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                            <i className="fas fa-check text-2xl text-green-600"></i>
                        </div>
                        <h3 className="mt-4 text-xl font-medium text-gray-900">Appointment Confirmed!</h3>
                        <div className="mt-2 text-center">
                            <p className="text-sm text-gray-600">
                                Your appointment has been successfully scheduled.
                            </p>
                        </div>
                        <div className="mt-6 border border-gray-200 rounded-lg p-6 bg-gray-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-500">Patient Name</span>
                                <span className="text-sm font-medium">{formData.fullName}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-500">Department</span>
                                <span className="text-sm font-medium">{departments.find(d => d.id === selectedDepartment)?.name}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-500">Doctor</span>
                                <span className="text-sm font-medium">{doctors.find(d => d.id === selectedDoctor)?.name}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-500">Date & Time</span>
                                <span className="text-sm font-medium">{selectedDate} at {selectedTime}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Appointment Token</span>
                                <span className="text-lg font-bold text-blue-600">{appointmentToken}</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                onClick={resetAppointmentForm}
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                Book Another Appointment
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow p-6">
                    <form onSubmit={handleAppointmentSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Information</h3>
                            </div>
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Age */}
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                                <input
                                    type="text"
                                    name="age"
                                    id="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Emergency Contact */}
                            <div>
                                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                                <input
                                    type="tel"
                                    name="emergencyContact"
                                    id="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Address */}
                            <div className="col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    name="address"
                                    id="address"
                                    rows={3}
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                ></textarea>
                            </div>
                            {/* Medical History */}
                            <div className="col-span-2">
                                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
                                <textarea
                                    name="medicalHistory"
                                    id="medicalHistory"
                                    rows={3}
                                    value={formData.medicalHistory}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div className="col-span-2">
                                <hr className="my-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Appointment Details</h3>
                            </div>
                            {/* Department */}
                            <div>
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                                <select
                                    id="department"
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Doctor */}
                            <div>
                                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
                                <select
                                    id="doctor"
                                    value={selectedDoctor}
                                    onChange={(e) => setSelectedDoctor(e.target.value)}
                                    required
                                    disabled={!selectedDepartment}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Doctor</option>
                                    {filteredDoctors.map((doctor) => (
                                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Date */}
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {/* Time Slot */}
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time Slot</label>
                                <select
                                    id="time"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    required
                                    disabled={!selectedDate}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Time</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-2 mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Appointments;