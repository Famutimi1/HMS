"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital,
  faBell,
  faChartLine,
  faCalendarCheck,
  faUserMd,
  faProcedures,
  faFileInvoiceDollar,
  faFlask,
  faHospitalSymbol
} from '@fortawesome/free-solid-svg-icons';

// Import components
import Dashboard from './components/dashboard';
import Appointments from './components/appointments';
import Doctors from './components/doctors';
import Patients from './components/patients';
import Billing from './components/billing';
import Laboratory from './components/laboratory';
import Operation from './components/operation';
import Consultation from './components/consultation';
import Pharmacy from './components/pharmacy';
import Discharge from './components/discharge';
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

interface TestOrder {
  patientSearch: string;
  testType: string;
  priority: 'normal' | 'urgent';
  notes: string;
}

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

const Home = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedBillingTab, setSelectedBillingTab] = useState('generate');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
  const [showPrescriptionConfirmDialog, setShowPrescriptionConfirmDialog] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [prescriptionStatus, setPrescriptionStatus] = useState('pending');
  const [showAddMedicineModal, setShowAddMedicineModal] = useState(false);
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
  const [selectedLabTest, setSelectedLabTest] = useState('');
  const [showNewTestOrderModal, setShowNewTestOrderModal] = useState(false);
  const [showNewBillModal, setShowNewBillModal] = useState(false);
  const [testOrderForm, setTestOrderForm] = useState<TestOrder>({
    patientSearch: '',
    testType: '',
    priority: 'normal',
    notes: ''
  });
  const [testOrderErrors, setTestOrderErrors] = useState({});
  const handleTestOrderSubmit = () => {
    const errors = {};
    if (!testOrderForm.patientSearch.trim()) {
      errors.patientSearch = 'Patient is required';
    }
    if (!testOrderForm.testType) {
      errors.testType = 'Test type is required';
    }
    if (Object.keys(errors).length > 0) {
      setTestOrderErrors(errors);
      return;
    }
    // Here you would typically send the data to your backend
    setShowNewTestOrderModal(false);
    setTestOrderForm({
      patientSearch: '',
      testType: '',
      priority: 'normal',
      notes: ''
    });
    setTestOrderErrors({});
  };
  const handleTestOrderChange = (e) => {
    const { name, value } = e.target;
    setTestOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (testOrderErrors[name]) {
      setTestOrderErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
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
  const removeBillItem = (index) => {
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
    // Here you would typically send the bill data to your backend
    setShowNewBillModal(false);
    setBillFormData({
      patientSearch: '',
      selectedPatient: null,
      items: [{ service: '', quantity: 1, price: 0 }],
      discount: 0,
      insurance: 0
    });
  };
  const [selectedOTDate, setSelectedOTDate] = useState('');
  const [selectedOTTime, setSelectedOTTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
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
  const [operationFormErrors, setOperationFormErrors] = useState({});
  const [showOperationSuccess, setShowOperationSuccess] = useState(false);
  const handleOperationFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const [selectedTime, setSelectedTime] = useState('');
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [patientSearchQuery, setPatientSearchQuery] = useState('');
  const [selectedConsultationPatient, setSelectedConsultationPatient] = useState(null);
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
  const [showAppointmentSuccess, setShowAppointmentSuccess] = useState(false);
  const [appointmentToken, setAppointmentToken] = useState('');
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
  // Initialize charts after component mounts
  React.useEffect(() => {
    if (activeTab === 'dashboard') {
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
    }
  }, [activeTab]);
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
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM'
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHospital} className="text-2xl text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-800">MediCare Hospital</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
              <FontAwesomeIcon icon={faBell} className="mr-2 text-blue-600" />
              Notifications
            </button>
            <div className="flex items-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20hospital%20administrator%2C%20business%20attire%2C%20confident%20pose%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot&width=40&height=40&seq=6&orientation=squarish"
                alt="Admin"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'dashboard' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'appointments' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                Appointments
              </button>
              <button
                onClick={() => setActiveTab('doctors')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'doctors' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faUserMd} className="mr-2" />
                Doctors
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'patients' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faProcedures} className="mr-2" />
                Patients
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'billing' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
                Billing
              </button>
              <button
                onClick={() => setActiveTab('laboratory')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'laboratory' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faFlask} className="mr-2" />
                Laboratory
              </button>
              <button
                onClick={() => setActiveTab('operation')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'operation' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faHospitalSymbol} className="mr-2" />
                Operation
              </button>
              <button
                onClick={() => setActiveTab('consultation')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'consultation' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <i className="fas fa-stethoscope mr-2"></i>
                Consultation
              </button>
              <button
                onClick={() => setActiveTab('pharmacy')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'pharmacy' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <i className="fas fa-pills mr-2"></i>
                Pharmacy
              </button>
              <button
                onClick={() => setActiveTab('discharge')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'discharge' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
              >
                <i className="fas fa-door-open mr-2"></i>
                Discharge
              </button>
            </div>
            <div className="flex items-center">
              <button className="ml-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-plus mr-2"></i>
                New Patient
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'appointments' && <Appointments />}
        {activeTab === 'doctors' && <Doctors />}
        {activeTab === 'patients' && <Patients />}
        {activeTab === 'billing' && <Billing />}
        {activeTab === 'laboratory' && <Laboratory />}
        {activeTab === 'operation' && <Operation />}
        {activeTab === 'consultation' && <Consultation />}
        {activeTab === 'pharmacy' && <Pharmacy />}
        {activeTab === 'discharge' && <Discharge />}
        {/* For backward compatibility, keeping the original dashboard section */}
      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHospital} className="text-2xl text-blue-600 mr-2" />
              <span className="text-gray-800 font-medium">MediCare Hospital Management System</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">© 2025 MediCare Hospital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
