// Generate a page similar to index.js
import React from 'react';
import { Phone, X } from 'lucide-react';

const AppShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-300 flex items-center justify-center p-4">
      <div className="w-80 h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="bg-gray-800 p-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">YOUR APP</h1>
          <button className="text-white"><X size={24} /></button>
        </div>
        
        <div className="p-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 font-bold">
            HOME
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            {['TICKETS', 'WEBCAST', 'SUITES', 'SHOP'].map((item, index) => (
              <button key={index} className="bg-gray-700 text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <Phone size={32} className="mb-2" />
                {item}
              </button>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <button className="text-white text-sm">MORE HERE ▼</button>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;