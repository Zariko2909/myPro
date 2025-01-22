import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Asosiy from './comp/Asosiy';
import MenHaqimda from './comp/MenHaqimda';
import Aloqa from './comp/Aloqa'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 shadow-md">
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/asosiy" 
                className="text-white text-lg hover:text-yellow-300 transition duration-300"
              >
                Asosiy
              </Link>
            </li>
            <li>
              <Link 
                to="/men-haqimda" 
                className="text-white text-lg hover:text-yellow-300 transition duration-300"
              >
                Men Haqimda
              </Link>
            </li>
            <li>
              <Link 
                to="/aloqa" 
                className="text-white text-lg hover:text-yellow-300 transition duration-300"
              >
                Aloqa
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Asosiy />} />
          <Route path="/asosiy" element={<Asosiy />} />
          <Route path="/men-haqimda" element={<MenHaqimda />} />
          <Route path="/aloqa" element={<Aloqa />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;



