"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

interface Medicine {
  name: string;
  genericName: string;
  category: string;
  manufacturer: string;
  unitPrice: number;
  quantity: number;
  expiryDate: string;
  storageConditions: string;
  image?: File;
  specialNotes?: string;
}

interface Prescription {
  patientName: string;
  patientId: string;
  medicine: string;
  dosage: string;
  status: 'pending' | 'fulfilled';
  patientImage: string;
}

const Pharmacy = () => {
  const [showAddMedicineModal, setShowAddMedicineModal] = useState(false);
  const [showPrescriptionConfirmDialog, setShowPrescriptionConfirmDialog] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
  const [medicineForm, setMedicineForm] = useState<Medicine>({
    name: '',
    genericName: '',
    category: '',
    manufacturer: '',
    unitPrice: 0,
    quantity: 0,
    expiryDate: '',
    storageConditions: ''
  });

  const handleMedicineFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      setMedicineForm(prev => ({
        ...prev,
        [name]: file
      }));
    } else {
      setMedicineForm(prev => ({
        ...prev,
        [name]: type === 'number' ? parseFloat(value) : value
      }));
    }
  };

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setShowAddMedicineModal(false);
    setMedicineForm({
      name: '',
      genericName: '',
      category: '',
      manufacturer: '',
      unitPrice: 0,
      quantity: 0,
      expiryDate: '',
      storageConditions: ''
    });
  };

  const handleFulfillPrescription = () => {
    // Here you would typically update the prescription status in your backend
    setShowPrescriptionConfirmDialog(false);
    setSelectedPrescription(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Pharmacy Management</h2>
        <button
          onClick={() => setShowAddMedicineModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Medicine
        </button>
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
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            setSelectedPrescription({
                              patientName: 'Emily Davis',
                              patientId: 'P-10237',
                              medicine: 'Amoxicillin 500mg',
                              dosage: '3 times daily for 7 days',
                              status: 'pending',
                              patientImage: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%2C%20casual%20attire%2C%20neutral%20expression%2C%20plain%20background%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=40&height=40&seq=17&orientation=squarish'
                            });
                            setShowPrescriptionConfirmDialog(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 mr-3">
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FontAwesomeIcon icon={faTimes} />
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
                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <FontAwesomeIcon icon={faCheck} className="block mb-2 text-blue-600" />
                  <span className="block">Check Stock</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <FontAwesomeIcon icon={faPlus} className="block mb-2 text-blue-600" />
                  <span className="block">Order Supplies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddMedicineModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Add New Medicine</h3>
                <button
                  onClick={() => setShowAddMedicineModal(false)}
                  className="text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form onSubmit={handleAddMedicine} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Medicine Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={medicineForm.name}
                      onChange={handleMedicineFormChange}
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
                      value={medicineForm.genericName}
                      onChange={handleMedicineFormChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={medicineForm.category}
                      onChange={handleMedicineFormChange}
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
                      value={medicineForm.manufacturer}
                      onChange={handleMedicineFormChange}
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
                        value={medicineForm.unitPrice}
                        onChange={handleMedicineFormChange}
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
                      value={medicineForm.quantity}
                      onChange={handleMedicineFormChange}
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
                      value={medicineForm.expiryDate}
                      onChange={handleMedicineFormChange}
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
                      value={medicineForm.storageConditions}
                      onChange={handleMedicineFormChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="e.g., Store in a cool, dry place"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Medicine Image</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleMedicineFormChange}
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
                      value={medicineForm.specialNotes}
                      onChange={handleMedicineFormChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Add any special notes or instructions..."
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddMedicineModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Save Medicine
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showPrescriptionConfirmDialog && selectedPrescription && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Prescription Fulfillment</h3>
              <p className="text-sm text-gray-600 mb-4">
                Are you sure you want to fulfill this prescription for {selectedPrescription.patientName}?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm font-medium text-gray-900 mb-2">Prescription Details:</p>
                <p className="text-sm text-gray-600">Medicine: {selectedPrescription.medicine}</p>
                <p className="text-sm text-gray-600">Dosage: {selectedPrescription.dosage}</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowPrescriptionConfirmDialog(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Cancel
                </button>
                <button
                  onClick={handleFulfillPrescription}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;