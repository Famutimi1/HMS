"use client";

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import React from 'react';
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
  faHospitalSymbol,
  faStethoscope,
  faPills,
  faDoorOpen,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Hospital Management System',
  description: 'A comprehensive hospital management system',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: LayoutProps) {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
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
                    <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
                    Consultation
                  </button>
                  <button
                    onClick={() => setActiveTab('pharmacy')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'pharmacy' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
                  >
                    <FontAwesomeIcon icon={faPills} className="mr-2" />
                    Pharmacy
                  </button>
                  <button
                    onClick={() => setActiveTab('discharge')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === 'discharge' ? 'border-blue-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer`}
                  >
                    <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
                    Discharge
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="ml-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    New Patient
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow">
          {React.isValidElement(children) 
            ? React.cloneElement(children as React.ReactElement<{activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>>}>, { 
                activeTab: activeTab, 
                setActiveTab: setActiveTab 
              }) 
            : children}
        </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}