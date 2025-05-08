import React from 'react';
import { getBusinesses, getArticles } from '../utils/storage';
import ArticleForm from './ArticleForm';

export default function BusinessList({ refresh }) {
  const businesses = getBusinesses();
  const articles = getArticles();

  return (
    <div className="space-y-6">
      {businesses.map((b) => (
        <div key={b.id} className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
            {b.name}
          </h2>
          <ArticleForm businessId={b.id} onAdd={refresh} />
          <ul className="mt-4 space-y-2">
            {articles.filter(a => a.business_id === b.id).map(a => (
              <li key={a.id} className="text-sm bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-3 rounded-lg shadow-md">
                <span className="font-semibold">{a.name}</span> - 
                <span className="ml-1">Qty: {a.qty}</span> - 
                <span className="ml-1">₹{a.selling_price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}