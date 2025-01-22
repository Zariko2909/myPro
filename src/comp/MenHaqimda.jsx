import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenHaqimda() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  justify-center p-6">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Men Haqimda: <hr />`Har safar kod yozganimda, u ishlasa, men qo‘rqib ketaman: darhol uni saqlab qo‘yaman, chunki nima uchun ishlayotganini bilmayman!`</h1>
      <p className="text-gray-700 text-lg mb-2">Ism: Zarifa</p>
      <p className="text-gray-700 text-lg mb-2">Familiya: Abdivaidova</p>
      <p className="text-gray-700 text-lg mb-6">Yosh: 25</p>
      <p className="text-gray-700 text-lg mb-6">Hozirda dasturchilik kursida tahsil olmoqdaman maqsadim o'z
        sohamda professional darajaga erishish o‘z bilimlarimni real loyihalarda qo‘llash
        va texnologiya sohasida o‘z o‘rnimni topish.</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white w-32 py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Orqaga
      </button>
    </div>
  );
}

export default MenHaqimda;

