'use client';
import React from 'react';

const Ejercicio5 = () => {
  // Datos de estudiantes
  const estudiantes = [
    { id: 1, name: 'Ana García', city: 'Madrid' },
    { id: 2, name: 'Carlos López', city: 'Barcelona' },
    { id: 3, name: 'María Rodríguez', city: 'Valencia' },
    { id: 4, name: 'David Fernández', city: 'Sevilla' }
  ];

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4E6851] mb-8 text-center">
          Ejercicio 5: Tabla de Estudiantes
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#4E6851] text-white">
                <th className="px-6 py-4 text-left font-bold">ID</th>
                <th className="px-6 py-4 text-left font-bold">Nombre</th>
                <th className="px-6 py-4 text-left font-bold">Ciudad</th>
                <th className="px-6 py-4 text-left font-bold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante, index) => (
                <tr 
                  key={estudiante.id}
                  className={`
                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    hover:bg-gray-100 transition-colors
                  `}
                >
                  <td className="px-6 py-4 border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-[#B83A2D] text-white rounded-full text-sm font-bold">
                      {estudiante.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 font-semibold text-gray-800">
                    {estudiante.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                    {estudiante.city}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="bg-[#4E6851] hover:bg-[#3d5340] text-white px-3 py-1 rounded text-sm font-medium mr-2">
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <a href="/" className="text-[#4E6851] hover:text-[#B83A2D] font-bold">
            ← Volver a la Carátula
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio5;