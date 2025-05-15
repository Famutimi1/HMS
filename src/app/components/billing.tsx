"use client";

import React, { useState } from 'react';

interface BillItem {
  service: string;
  quantity: number;
  price: number;
}

interface BillForm {
  patientSearch: string;
  selectedPatient: any | null;
  items: BillItem[];
  discount: number;
  insurance: number;
}

const Billing = () => {
  const [selectedBillingTab, setSelectedBillingTab] = useState('generate');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showNewBillModal, setShowNewBillModal] = useState(false);
  const [billFormData, setBillFormData] = useState<BillForm>({
    patientSearch: '',
    selectedPatient: null,
    items: [{ service: '', quantity: 1, price: 0 }],
    discount: 0,
    insurance: 0
  });

  const handleBillInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    if (name === 'patientSearch') {
      setBillFormData({ ...billFormData, patientSearch: value });
    } else {
      const newItems = [...billFormData.items];
      newItems[index] = { ...newItems[index], [name]: value };
      setBillFormData({ ...billFormData, items: newItems });
    }
  };

  const addBillItem = () => {
    setBillFormData({
      ...billFormData,
      items: [...billFormData.items, { service: '', quantity: 1, price: 0 }]
    });
  };

  const removeBillItem = (index: number) => {
    const newItems = billFormData.items.filter((_, i) => i !== index);
    setBillFormData({ ...billFormData, items: newItems });
  };

  const calculateSubtotal = () => {
    return billFormData.items.reduce((total, item) => {
      return total + (Number(item.quantity) * Number(item.price));
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * billFormData.discount) / 100;
    const insuranceAmount = (subtotal * billFormData.insurance) / 100;
    return subtotal - discountAmount - insuranceAmount;
  };

  const handleCreateBill = () => {
    setShowNewBillModal(false);
    setBillFormData({
      patientSearch: '',
      selectedPatient: null,
      items: [{ service: '', quantity: 1, price: 0 }],
      discount: 0,
      insurance: 0
    });
  };

  return (
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
                        onChange={(e) => handleBillInputChange(e, 0)}
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
                        onChange={(e) => setBillFormData({ ...billFormData, discount: Number(e.target.value) })}
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
                        onChange={(e) => setBillFormData({ ...billFormData, insurance: Number(e.target.value) })}
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
  );
};

export default Billing;