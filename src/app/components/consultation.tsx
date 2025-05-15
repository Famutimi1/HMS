"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

interface ConsultationPatient {
  id: string;
  name: string;
  image: string;
  status: string;
  lastVisit: string;
}

interface Medicine {
  name: string;
  dosage: string;
  duration: string;
}

interface ConsultationForm {
  symptoms: string;
  medicines: Medicine[];
  labTests: string[];
}

const Consultation = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [patientSearchQuery, setPatientSearchQuery] = useState('');
  const [selectedConsultationPatient, setSelectedConsultationPatient] = useState<ConsultationPatient | null>(null);
  const [consultationForm, setConsultationForm] = useState<ConsultationForm>({
    symptoms: '',
    medicines: [{ name: '', dosage: '', duration: '' }],
    labTests: []
  });

  const handleAddMedicine = () => {
    setConsultationForm(prev => ({
      ...prev,
      medicines: [...prev.medicines, { name: '', dosage: '', duration: '' }]
    }));
  };

  const handleRemoveMedicine = (index: number) => {
    setConsultationForm(prev => ({
      ...prev,
      medicines: prev.medicines.filter((_, i) => i !== index)
    }));
  };

  const handleMedicineChange = (index: number, field: keyof Medicine, value: string) => {
    setConsultationForm(prev => {
      const newMedicines = [...prev.medicines];
      newMedicines[index] = { ...newMedicines[index], [field]: value };
      return { ...prev, medicines: newMedicines };
    });
  };

  const handleLabTestChange = (value: string) => {
    if (!consultationForm.labTests.includes(value)) {
      setConsultationForm(prev => ({
        ...prev,
        labTests: [...prev.labTests, value]
      }));
    }
  };

  const samplePatients: ConsultationPatient[] = [
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
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Consultation</h2>
        <div className="flex space-x-3">
          <button
            id="newConsultationBtn"
            onClick={() => setShowConsultationModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            New Consultation
          </button>
        </div>
      </div>

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
                  <FontAwesomeIcon icon={faTimes} />
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
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
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
                    {samplePatients
                      .filter(patient =>
                        patient.name.toLowerCase().includes(patientSearchQuery.toLowerCase()) ||
                        patient.id.toLowerCase().includes(patientSearchQuery.toLowerCase())
                      )
                      .map((patient) => (
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
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {patient.lastVisit}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedConsultationPatient(patient)}
                              className={`px-3 py-1 rounded-md text-sm font-medium ${selectedConsultationPatient?.id === patient.id ? 'bg-blue-100 text-blue-700' : 'text-blue-600 hover:text-blue-900'} !rounded-button whitespace-nowrap cursor-pointer`}>
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
                      setShowConsultationModal(false);
                      setPatientSearchQuery('');
                    }
                  }}
                  disabled={!selectedConsultationPatient}
                  className={`px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer ${selectedConsultationPatient ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                  Start Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                    value={consultationForm.symptoms}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, symptoms: e.target.value }))}
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Record patient symptoms..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prescription</label>
                  <div className="space-y-3">
                    {consultationForm.medicines.map((medicine, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="text"
                          value={medicine.name}
                          onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Medicine name"
                        />
                        <input
                          type="text"
                          value={medicine.dosage}
                          onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                          className="w-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Dosage"
                        />
                        <input
                          type="text"
                          value={medicine.duration}
                          onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
                          className="w-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Duration"
                        />
                        <button
                          onClick={() => handleRemoveMedicine(index)}
                          className="text-red-600 hover:text-red-900">
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleAddMedicine}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                    <FontAwesomeIcon icon={faPlus} className="mr-1" />
                    Add Medicine
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lab Tests</label>
                  <select
                    value=""
                    onChange={(e) => handleLabTestChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Test</option>
                    <option value="blood">Blood Test</option>
                    <option value="urine">Urine Analysis</option>
                    <option value="xray">X-Ray</option>
                  </select>
                  {consultationForm.labTests.length > 0 && (
                    <div className="mt-2 space-x-2">
                      {consultationForm.labTests.map((test, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {test}
                          <button
                            onClick={() => setConsultationForm(prev => ({
                              ...prev,
                              labTests: prev.labTests.filter((_, i) => i !== index)
                            }))}
                            className="ml-1 text-blue-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
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
  );
};

export default Consultation;