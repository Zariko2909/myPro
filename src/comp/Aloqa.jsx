import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Aloqa() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Aloqa</h1>
      <p className="text-gray-700 text-lg mb-2">Telegram: <a href="https://t.me/zrf2909" className="text-blue-500 hover:underline">@zrf2909</a></p>
      <p className="text-gray-700 text-lg mb-6">Tlf: <span className="font-medium">+998 90 000 2909</span></p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Orqaga
      </button>
    </div>
  );
}

export default Aloqa;

