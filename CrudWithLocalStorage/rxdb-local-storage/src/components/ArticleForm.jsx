import React, { useState } from 'react';
import { getArticles, saveArticles } from '../utils/storage';

export default function ArticleForm({ businessId, onAdd }) {
  const [form, setForm] = useState({ name: '', qty: '', selling_price: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: crypto.randomUUID(),
      ...form,
      qty: parseInt(form.qty),
      selling_price: parseFloat(form.selling_price),
      business_id: businessId,
    };
    const articles = getArticles();
    saveArticles([...articles, newArticle]);
    setForm({ name: '', qty: '', selling_price: '' });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-xl shadow-lg mb-6">
      <h3 className="text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
        Add New Article
      </h3>
      <input
        name="name"
        placeholder="Article Name"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="qty"
        placeholder="Quantity"
        type="number"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={form.qty}
        onChange={handleChange}
        required
      />
      <input
        name="selling_price"
        placeholder="Selling Price"
        type="number"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={form.selling_price}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
      >
        Add Article
      </button>
    </form>
  );
}