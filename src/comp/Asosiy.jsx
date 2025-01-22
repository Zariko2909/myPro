import React from "react";
import { useNavigate } from "react-router-dom";

function Asosiy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">
        Bu dasturchining sahifasi
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        "Dasturchi bo‘lishni o‘rganish – avvaliga kod yozasiz, keyin nima uchun
        u ishlamayotganini tushunish uchun detektivga aylanasiz!"
      </p>
      <img src="" alt="" />
    </div>
  );
}

export default Asosiy;
