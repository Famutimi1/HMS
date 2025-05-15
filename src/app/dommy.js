{false && activeTab === 'dashboard' && (
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
  )}
  {/* Appointments */}
  {activeTab === 'appointments' && (
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
  )}
  {/* Doctors */}
  {activeTab === 'doctors' && (
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
                <select className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
            {doctors.map((doctor) => (
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
  )}
  {/* Patients */}
  {activeTab === 'patients' && (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Management</h2>
        <button
          id="addPatientBtn"
          onClick={() => setShowAddPatientModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-user-plus mr-2"></i>
          Add New Patient
        </button>
        {showAddPatientModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Add New Patient</h3>
                  <button
                    onClick={() => setShowAddPatientModal(false)}
                    className="text-gray-400 hover:text-gray-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form id="addPatientForm" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="patientName"
                        name="fullName"
                        value={newPatientForm.fullName}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                      <input
                        type="number"
                        id="patientAge"
                        name="age"
                        value={newPatientForm.age}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        id="patientGender"
                        name="gender"
                        value={newPatientForm.gender}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="patientPhone"
                        name="phone"
                        value={newPatientForm.phone}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="patientEmail"
                        name="email"
                        value={newPatientForm.email}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                      <textarea
                        id="patientAddress"
                        name="address"
                        value={newPatientForm.address}
                        onChange={handlePatientFormChange}
                        rows={3}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      ></textarea>
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
                      <textarea
                        id="patientMedicalHistory"
                        name="medicalHistory"
                        value={newPatientForm.medicalHistory}
                        onChange={handlePatientFormChange}
                        rows={3}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">Insurance Provider</label>
                      <input
                        type="text"
                        id="patientInsuranceProvider"
                        name="insuranceProvider"
                        value={newPatientForm.insuranceProvider}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700">Insurance Number</label>
                      <input
                        type="text"
                        id="patientInsuranceNumber"
                        name="insuranceNumber"
                        value={newPatientForm.insuranceNumber}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                      <input
                        type="text"
                        id="patientEmergencyContact"
                        name="emergencyContact"
                        value={newPatientForm.emergencyContact}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        id="patientEmergencyPhone"
                        name="emergencyPhone"
                        value={newPatientForm.emergencyPhone}
                        onChange={handlePatientFormChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => {
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
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out">
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleAddPatient}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      Save Patient
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 p-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
            <div>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Discharged</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-filter mr-2"></i>
              Filter
            </button>
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-download mr-2"></i>
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
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
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <i className="fas fa-trash"></i>
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
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <i className="fas fa-trash"></i>
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
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <i className="fas fa-trash"></i>
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
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <i className="fas fa-trash"></i>
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
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> patients
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
  )}
  {/* Billing Section */}
  {activeTab === 'billing' && (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Billing and Payment Management</h2>
        <button
          id="newBillButton"
          onClick={() => setShowNewBillModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-plus mr-2"></i>
          New Bill
        </button>
        {showNewBillModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Create New Bill</h3>
                  <button
                    onClick={() => setShowNewBillModal(false)}
                    className="text-gray-400 hover:text-gray-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="space-y-6">
                  {/* Patient Search */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Patient
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="patientSearch"
                        name="patientSearch"
                        value={billFormData.patientSearch}
                        onChange={(e) => handleBillInputChange(e,index)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter patient name or ID..."
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i className="fas fa-search text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  {/* Bill Items */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bill Items
                    </label>
                    {billFormData.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 mb-4">
                        <input
                          type="text"
                          name="service"
                          value={item.service}
                          onChange={(e) => handleBillInputChange(e, index)}
                          placeholder="Service/Item"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                          type="number"
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleBillInputChange(e, index)}
                          placeholder="Qty"
                          className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                          type="number"
                          name="price"
                          value={item.price}
                          onChange={(e) => handleBillInputChange(e, index)}
                          placeholder="Price"
                          className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {index > 0 && (
                          <button
                            onClick={() => removeBillItem(index)}
                            className="text-red-600 hover:text-red-800">
                            <i className="fas fa-trash"></i>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addBillItem}
                      className="text-blue-600 hover:text-blue-800 text-sm">
                      <i className="fas fa-plus mr-2"></i>
                      Add Item
                    </button>
                  </div>
                  {/* Discounts and Insurance */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount (%)
                      </label>
                      <input
                        type="number"
                        value={billFormData.discount}
                        onChange={(e) => setBillFormData({ ...billFormData, discount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Insurance Coverage (%)
                      </label>
                      <input
                        type="number"
                        value={billFormData.insurance}
                        onChange={(e) => setBillFormData({ ...billFormData, insurance: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  {/* Bill Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-medium">-${((calculateSubtotal() * billFormData.discount) / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Insurance Coverage:</span>
                      <span className="font-medium">-${((calculateSubtotal() * billFormData.insurance) / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold text-lg">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowNewBillModal(false);
                      setBillFormData({
                        patientSearch: '',
                        selectedPatient: null,
                        items: [{ service: '', quantity: 1, price: 0 }],
                        discount: 0,
                        insurance: 0
                      });
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out">
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateBill}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    Create Bill
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setSelectedBillingTab('generate')}
              className={`w-1/4 py-4 px-6 text-center border-b-2 font-medium text-sm ${selectedBillingTab === 'generate'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              <i className="fas fa-file-invoice mr-2"></i>
              Generate Bill
            </button>
            <button
              onClick={() => setSelectedBillingTab('payments')}
              className={`w-1/4 py-4 px-6 text-center border-b-2 font-medium text-sm ${selectedBillingTab === 'payments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              <i className="fas fa-credit-card mr-2"></i>
              Payments
            </button>
            <button
              onClick={() => setSelectedBillingTab('insurance')}
              className={`w-1/4 py-4 px-6 text-center border-b-2 font-medium text-sm ${selectedBillingTab === 'insurance'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              <i className="fas fa-shield-alt mr-2"></i>
              Insurance
            </button>
            <button
              onClick={() => setSelectedBillingTab('reports')}
              className={`w-1/4 py-4 px-6 text-center border-b-2 font-medium text-sm ${selectedBillingTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              <i className="fas fa-chart-bar mr-2"></i>
              Reports
            </button>
          </nav>
        </div>
        <div className="p-6">
          {selectedBillingTab === 'generate' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patient ID</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter Patient ID"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bill Type</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>Consultation</option>
                    <option>Laboratory Test</option>
                    <option>Pharmacy</option>
                    <option>Operation Theater</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Bill Items</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Consultation Fee</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$100.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$100.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-red-600 hover:text-red-900">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Subtotal:</span>
                      <span className="text-sm font-medium text-gray-900">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Tax (10%):</span>
                      <span className="text-sm font-medium text-gray-900">$10.00</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-base font-medium text-gray-900">Total:</span>
                      <span className="text-base font-medium text-gray-900">$110.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-save mr-2"></i>
                  Save Bill
                </button>
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-print mr-2"></i>
                  Print Invoice
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
  {/* Laboratory Section */}
  {activeTab === 'laboratory' && (
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
                    <option value="blood">Blood Test</option>
                    <option value="urine">Urine Analysis</option>
                    <option value="xray">X-Ray</option>
                    <option value="mri">MRI Scan</option>
                    <option value="ct">CT Scan</option>
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
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=15&orientation=squarish" alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Emily Davis</div>
                            <div className="text-sm text-gray-500">P-10237</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Blood Test</div>
                        <div className="text-sm text-gray-500">Complete Blood Count</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
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
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Blood Test Results</h4>
                    <p className="text-sm text-gray-500">Patient: Emily Davis</p>
                    <p className="text-xs text-gray-500">Uploaded: May 4, 2025</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-900">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Operation Theater Section */}
  {activeTab === 'operation' && (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Operation Theater Management</h2>
        <button
          id="scheduleOperationBtn"
          onClick={() => setShowScheduleOperationModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-plus mr-2"></i>
          Schedule Operation
        </button>
        {showScheduleOperationModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Schedule New Operation</h3>
                  <button
                    onClick={() => setShowScheduleOperationModal(false)}
                    className="text-gray-400 hover:text-gray-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                {showOperationSuccess ? (
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <i className="fas fa-check text-xl text-green-600"></i>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Operation Scheduled Successfully</h3>
                  </div>
                ) : (
                  <form id="scheduleOperationForm" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Patient ID/Name</label>
                        <input
                          type="text"
                          id="patientId"
                          name="patientId"
                          value={operationForm.patientId}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.patientId ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        />
                        {operationFormErrors.patientId && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.patientId}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="operationType" className="block text-sm font-medium text-gray-700">Operation Type</label>
                        <select
                          id="operationType"
                          name="operationType"
                          value={operationForm.operationType}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.operationType ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        >
                          <option value="">Select Operation Type</option>
                          <option value="appendectomy">Appendectomy</option>
                          <option value="cardiac">Cardiac Surgery</option>
                          <option value="orthopedic">Orthopedic Surgery</option>
                          <option value="neurosurgery">Neurosurgery</option>
                        </select>
                        {operationFormErrors.operationType && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.operationType}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={operationForm.date}
                          onChange={handleOperationFormChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`mt-1 block w-full border ${operationFormErrors.date ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        />
                        {operationFormErrors.date && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.date}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={operationForm.time}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.time ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        />
                        {operationFormErrors.time && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.time}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="surgeon" className="block text-sm font-medium text-gray-700">Surgeon</label>
                        <select
                          id="surgeon"
                          name="surgeon"
                          value={operationForm.surgeon}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.surgeon ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        >
                          <option value="">Select Surgeon</option>
                          {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                          ))}
                        </select>
                        {operationFormErrors.surgeon && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.surgeon}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="anesthesiologist" className="block text-sm font-medium text-gray-700">Anesthesiologist</label>
                        <select
                          id="anesthesiologist"
                          name="anesthesiologist"
                          value={operationForm.anesthesiologist}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.anesthesiologist ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        >
                          <option value="">Select Anesthesiologist</option>
                          <option value="dr-smith">Dr. Smith</option>
                          <option value="dr-jones">Dr. Jones</option>
                          <option value="dr-wilson">Dr. Wilson</option>
                        </select>
                        {operationFormErrors.anesthesiologist && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.anesthesiologist}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="otRoom" className="block text-sm font-medium text-gray-700">Operation Theater</label>
                        <select
                          id="otRoom"
                          name="otRoom"
                          value={operationForm.otRoom}
                          onChange={handleOperationFormChange}
                          className={`mt-1 block w-full border ${operationFormErrors.otRoom ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        >
                          <option value="">Select Operation Theater</option>
                          <option value="ot1">OT Room 1</option>
                          <option value="ot2">OT Room 2</option>
                          <option value="ot3">OT Room 3</option>
                        </select>
                        {operationFormErrors.otRoom && (
                          <p className="mt-1 text-sm text-red-600">{operationFormErrors.otRoom}</p>
                        )}
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">Special Requirements</label>
                        <textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          value={operationForm.specialRequirements}
                          onChange={handleOperationFormChange}
                          rows={3}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Any special equipment or requirements..."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setShowScheduleOperationModal(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleScheduleOperation}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                        Schedule Operation
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Operation Schedule</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operation</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=16&orientation=squarish" alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Robert Fox</div>
                            <div className="text-sm text-gray-500">P-10234</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Appendectomy</div>
                        <div className="text-sm text-gray-500">Dr. John Smith</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">May 5, 2025</div>
                        <div className="text-sm text-gray-500">09:00 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Scheduled
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">OT Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">OT Room 1</p>
                  <p className="text-xs text-gray-500">Currently: Available</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  Ready
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">OT Room 2</p>
                  <p className="text-xs text-gray-500">Currently: In Use</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">
                  Occupied
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Consultation Section */}
  {activeTab === 'consultation' && (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Consultation</h2>
        <div className="flex space-x-3">
          <button
            id="newConsultationBtn"
            onClick={() => setShowConsultationModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-plus mr-2"></i>
            New Consultation
          </button>
          {showConsultationModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-900">Select Patient for Consultation</h3>
                    <button
                      onClick={() => {
                        setShowConsultationModal(false);
                        setPatientSearchQuery('');
                        setSelectedConsultationPatient(null);
                      }}
                      className="text-gray-400 hover:text-gray-500">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="patientSearchInput"
                        value={patientSearchQuery}
                        onChange={(e) => setPatientSearchQuery(e.target.value)}
                        placeholder="Search patient by name or ID..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-search text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            id: 'P-10237',
                            name: 'Emily Davis',
                            image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=19&orientation=squarish',
                            status: 'Scheduled',
                            lastVisit: 'April 28, 2025'
                          },
                          {
                            id: 'P-10234',
                            name: 'Robert Fox',
                            image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20man%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=20&orientation=squarish',
                            status: 'Waiting',
                            lastVisit: 'May 1, 2025'
                          }
                        ].filter(patient =>
                          patient.name.toLowerCase().includes(patientSearchQuery.toLowerCase()) ||
                          patient.id.toLowerCase().includes(patientSearchQuery.toLowerCase())
                        ).map((patient) => (
                          <tr key={patient.id} className={selectedConsultationPatient?.id === patient.id ? 'bg-blue-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img className="h-10 w-10 rounded-full" src={patient.image} alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                                  <div className="text-sm text-gray-500">{patient.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {patient.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {patient.lastVisit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => setSelectedConsultationPatient(patient)}
                                className={`px-3 py-1 rounded-md text-sm font-medium ${selectedConsultationPatient?.id === patient.id
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-blue-600 hover:text-blue-900'
                                  } !rounded-button whitespace-nowrap cursor-pointer`}>
                                Select
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setShowConsultationModal(false);
                        setPatientSearchQuery('');
                        setSelectedConsultationPatient(null);
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      Cancel
                    </button>
                    <button
                      id="startConsultationBtn"
                      onClick={() => {
                        if (selectedConsultationPatient) {
                          // Clear and update the consultation form with selected patient
                          setShowConsultationModal(false);
                          setPatientSearchQuery('');
                          // You can add more state updates here to populate the consultation form
                        }
                      }}
                      disabled={!selectedConsultationPatient}
                      className={`px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer ${selectedConsultationPatient
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}>
                      Start Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Current Patient</h3>
                  <p className="text-sm text-gray-500">Emily Davis - P-10237</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  In Consultation
                </span>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Symptoms</label>
                  <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Record patient symptoms..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prescription</label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Medicine name"
                      />
                      <input
                        type="text"
                        className="w-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Dosage"
                      />
                      <input
                        type="text"
                        className="w-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Duration"
                      />
                      <button className="text-red-600 hover:text-red-900">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                    <i className="fas fa-plus mr-1"></i>
                    Add Medicine
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lab Tests</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Test</option>
                    <option value="blood">Blood Test</option>
                    <option value="urine">Urine Analysis</option>
                    <option value="xray">X-Ray</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    Save as Draft
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    Complete Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Patient History</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm font-medium text-gray-900">Previous Visit: April 28, 2025</p>
                  <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-600 mt-1">Diagnosis: Acute bronchitis</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm font-medium text-gray-900">Previous Visit: March 15, 2025</p>
                  <p className="text-sm text-gray-500">Dr. Michael Wilson</p>
                  <p className="text-sm text-gray-600 mt-1">Diagnosis: Seasonal allergies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Vital Signs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Blood Pressure</p>
                  <p className="text-lg font-medium text-gray-900">120/80</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Heart Rate</p>
                  <p className="text-lg font-medium text-gray-900">72 bpm</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-lg font-medium text-gray-900">98.6°F</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Oxygen Level</p>
                  <p className="text-lg font-medium text-gray-900">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Pharmacy Section */}
  {activeTab === 'pharmacy' && (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Pharmacy Management</h2>
        <button
          id="addMedicineBtn"
          onClick={() => setShowAddMedicineModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-plus mr-2"></i>
          Add Medicine
        </button>
        {showAddMedicineModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Add New Medicine</h3>
                  <button
                    onClick={() => setShowAddMedicineModal(false)}
                    className="text-gray-400 hover:text-gray-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form id="addMedicineForm" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="medicineName" className="block text-sm font-medium text-gray-700">Medicine Name</label>
                      <input
                        type="text"
                        id="medicineName"
                        name="medicineName"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="genericName" className="block text-sm font-medium text-gray-700">Generic Name</label>
                      <input
                        type="text"
                        id="genericName"
                        name="genericName"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                      <select
                        id="category"
                        name="category"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="antibiotics">Antibiotics</option>
                        <option value="analgesics">Analgesics</option>
                        <option value="antiviral">Antiviral</option>
                        <option value="cardiac">Cardiac</option>
                        <option value="diabetes">Diabetes</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label>
                      <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700">Unit Price</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          id="unitPrice"
                          name="unitPrice"
                          className="pl-7 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        type="date"
                        id="expiryDate"
                        name="expiryDate"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="storageConditions" className="block text-sm font-medium text-gray-700">Storage Conditions</label>
                      <input
                        type="text"
                        id="storageConditions"
                        name="storageConditions"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="e.g., Store in a cool, dry place"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="medicineImage" className="block text-sm font-medium text-gray-700">Medicine Image</label>
                      <input
                        type="file"
                        id="medicineImage"
                        name="medicineImage"
                        accept="image/*"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="specialNotes" className="block text-sm font-medium text-gray-700">Special Notes</label>
                      <textarea
                        id="specialNotes"
                        name="specialNotes"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Add any special notes or instructions..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowAddMedicineModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                      Save Medicine
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Current Prescriptions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prescription</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=17&orientation=squarish" alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Emily Davis</div>
                            <div className="text-sm text-gray-500">P-10237</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">Amoxicillin 500mg</div>
                        <div className="text-sm text-gray-500">3 times daily for 7 days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${prescriptionStatus === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                          }`}>
                          {prescriptionStatus === 'pending' ? 'Pending' : 'Fulfilled'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          id="fulfillPrescriptionBtn"
                          onClick={() => {
                            setSelectedPrescription({
                              patientName: 'Emily Davis',
                              medicine: 'Amoxicillin 500mg',
                              dosage: '3 times daily for 7 days'
                            });
                            setShowPrescriptionConfirmDialog(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">
                          <i className="fas fa-check"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-900 cursor-pointer">
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                      {showPrescriptionConfirmDialog && (
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                            <div className="p-6">
                              <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Prescription Fulfillment</h3>
                              <p className="text-sm text-gray-600 mb-4">
                                Are you sure you want to fulfill this prescription for {selectedPrescription?.patientName}?
                              </p>
                              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                <p className="text-sm font-medium text-gray-900 mb-2">Prescription Details:</p>
                                <p className="text-sm text-gray-600">Medicine: {selectedPrescription?.medicine}</p>
                                <p className="text-sm text-gray-600">Dosage: {selectedPrescription?.dosage}</p>
                              </div>
                              <div className="flex justify-end space-x-3">
                                <button
                                  onClick={() => setShowPrescriptionConfirmDialog(false)}
                                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                                  Cancel
                                </button>
                                <button
                                  onClick={() => {
                                    setPrescriptionStatus('fulfilled');
                                    setShowPrescriptionConfirmDialog(false);
                                    setSelectedPrescription(null);
                                  }}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                                  Confirm
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Amoxicillin 500mg</p>
                    <p className="text-xs text-gray-500">Stock: 250 units</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                    Sufficient
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Ibuprofen 400mg</p>
                    <p className="text-xs text-gray-500">Stock: 50 units</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">
                    Low Stock
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-boxes mb-2 text-blue-600"></i>
                  <span className="block">Check Stock</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-clipboard-list mb-2 text-blue-600"></i>
                  <span className="block">Order Supplies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Discharge Section */}
  {activeTab === 'discharge' && (
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
  )}