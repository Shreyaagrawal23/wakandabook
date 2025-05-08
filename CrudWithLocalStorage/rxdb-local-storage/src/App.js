import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessList from './components/BusinessList';

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  // refrshing the ui
  const refresh = () => setRefreshFlag(!refreshFlag);

  
  const syncToMongo = async () => {
    const businesses = JSON.parse(localStorage.getItem('businesses') || '[]');
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');

    if (!businesses.length && !articles.length) {
      alert("📭 Nothing to sync!");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businesses, articles }),
      });

      if (res.ok) {
        //Removing from localStorage
        localStorage.removeItem('businesses');
        localStorage.removeItem('articles');

        //  Refreshing UI
        refresh();

        alert('✅ Data synced and cleared from local storage!');
      } else {
        alert('❌ Sync failed!');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error syncing data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Local Business & Article Manager
        </h1>
        <BusinessForm onAdd={refresh} />
        <BusinessList refresh={refresh} />

        <div className="text-center mt-8">
          <button
            onClick={syncToMongo}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          >
            Sync to MongoDB
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;