import React from 'react';
// import Button from '@/components/ui/Button';

export default function DoctorsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
        {/* <Button variant="primary">Add New Doctor</Button> */}
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {/* This would be populated from a database in a real application */}
          {[1, 2, 3, 4, 5].map((id) => (
            <li key={id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-primary-600">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Cardiology</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {/* <Button variant="outline" size="sm">View Profile</Button>
                    <Button variant="outline" size="sm">Schedule</Button> */}
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Experience: 10 years
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      Patients: 250+
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>Available: Mon-Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}