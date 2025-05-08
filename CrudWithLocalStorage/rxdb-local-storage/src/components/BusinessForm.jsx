import React, { useState } from 'react';
import { getBusinesses, saveBusinesses } from '../utils/storage';

export default function BusinessForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBusiness = { id: crypto.randomUUID(), name };
    const businesses = getBusinesses();
    saveBusinesses([...businesses, newBusiness]);
    setName('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        Add New Business
      </h2>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Enter business name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
      >
        Add Business
      </button>
    </form>
  );
}