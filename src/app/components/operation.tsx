"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';

interface OperationForm {
  patientId: string;
  operationType: string;
  date: string;
  time: string;
  surgeon: string;
  anesthesiologist: string;
  otRoom: string;
  specialRequirements: string;
}

const Operation = () => {
  const [showScheduleOperationModal, setShowScheduleOperationModal] = useState(false);
  const [operationForm, setOperationForm] = useState<OperationForm>({
    patientId: '',
    operationType: '',
    date: '',
    time: '',
    surgeon: '',
    anesthesiologist: '',
    otRoom: '',
    specialRequirements: ''
  });
  const [operationFormErrors, setOperationFormErrors] = useState<OperationForm>({
    patientId: '',
    operationType: '',
    date: '',   
    time: '',
    surgeon: '',
    anesthesiologist: '',
    otRoom: '',
    specialRequirements: ''
  });
  const [showOperationSuccess, setShowOperationSuccess] = useState(false);

  const handleOperationFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOperationForm(prev => ({
      ...prev,
      [name]: value
    }));
    if (name in operationFormErrors) {
      setOperationFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateOperationForm = () => {
    interface OperationFormErrors {
      patientId?: string;
      operationType?: string;
      date?: string;
      time?: string;
      surgeon?: string;
      anesthesiologist?: string;
      otRoom?: string;
    }

    const errors: OperationFormErrors = {};
    if (!operationForm.patientId.trim()) errors.patientId = 'Patient is required';
    if (!operationForm.operationType.trim()) errors.operationType = 'Operation type is required';
    if (!operationForm.date) errors.date = 'Date is required';
    if (!operationForm.time) errors.time = 'Time is required';
    if (!operationForm.surgeon) errors.surgeon = 'Surgeon is required';
    if (!operationForm.anesthesiologist) errors.anesthesiologist = 'Anesthesiologist is required';
    if (!operationForm.otRoom) errors.otRoom = 'Operation theater is required';
    return errors;
  };

  const handleScheduleOperation = () => {
    const errors = validateOperationForm();
    if (Object.keys(errors).length > 0) {
      setOperationFormErrors(errors);
      return;
    }
    setShowOperationSuccess(true);
    setTimeout(() => {
      setShowOperationSuccess(false);
      setShowScheduleOperationModal(false);
      setOperationForm({
        patientId: '',
        operationType: '',
        date: '',
        time: '',
        surgeon: '',
        anesthesiologist: '',
        otRoom: '',
        specialRequirements: ''
      });
    }, 2000);
  };

  const doctors = [
    { id: 'dr-smith', name: 'Dr. John Smith' },
    { id: 'dr-johnson', name: 'Dr. Sarah Johnson' },
    { id: 'dr-patel', name: 'Dr. Raj Patel' },
    { id: 'dr-chen', name: 'Dr. Lisa Chen' },
    { id: 'dr-wilson', name: 'Dr. Michael Wilson' }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Operation Theater Management</h2>
        <button
          id="scheduleOperationBtn"
          onClick={() => setShowScheduleOperationModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
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
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                {showOperationSuccess ? (
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <FontAwesomeIcon icon={faCheck} className="text-xl text-green-600" />
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
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FontAwesomeIcon icon={faTimes} />
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
  );
}

export default Operation;