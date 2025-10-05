'use client';
import React from 'react';

// Componente 4 (el más profundo)
const Componente4 = ({ datos }) => {
  return (
    <div className="p-6 bg-[#4E6851] rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Componente 4</h2>
      
      {/* Card con los datos del objeto */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-[#B83A2D] rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">✓</span>
          </div>
          <h3 className="text-xl font-bold text-[#4E6851]">Datos Recibidos</h3>
          <p className="text-sm text-gray-600">Desde Componente 1</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-[#DCC9A9] rounded-full flex items-center justify-center mr-3">
              <span className="text-[#B83A2D] font-bold">👤</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Nombre</p>
              <p className="font-semibold">{datos.nombre}</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-[#DCC9A9] rounded-full flex items-center justify-center mr-3">
              <span className="text-[#B83A2D] font-bold">🏠</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Dirección</p>
              <p className="font-semibold">{datos.direccion}</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-[#DCC9A9] rounded-full flex items-center justify-center mr-3">
              <span className="text-[#B83A2D] font-bold">🌆</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ciudad</p>
              <p className="font-semibold">{datos.ciudad}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Estos datos viajaron a través de 4 componentes
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente 3
const Componente3 = ({ datos }) => {
  return (
    <div className="p-6 bg-[#B83A2D] rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Componente 3</h2>
      <p className="text-center mb-4 opacity-90">Pasando datos al Componente 4...</p>
      <Componente4 datos={datos} />
    </div>
  );
};

// Componente 2
const Componente2 = ({ datos }) => {
  return (
    <div className="p-6 bg-[#DCC9A9] rounded-lg border-2 border-[#4E6851]">
      <h2 className="text-xl font-bold mb-4 text-center text-[#4E6851]">Componente 2</h2>
      <p className="text-center mb-4 text-[#B83A2D] font-medium">
        Recibiendo datos del Componente 1 y pasando al Componente 3
      </p>
      <Componente3 datos={datos} />
    </div>
  );
};

// Componente 1 (padre)
const Ejercicio2 = () => {
  // Objeto con los datos a pasar
  const datosUsuario = {
    nombre: "Jaime",
    direccion: "Jr. Junin 450",
    ciudad: "Huancayo"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCC9A9] to-[#f0e6d0] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4E6851] mb-2 text-center">
          Ejercicio 2: Prop Drilling
        </h1>
        <p className="text-[#B83A2D] text-center mb-8 text-lg">
          Pasando datos a través de componentes anidados
        </p>

        {/* Visualización del flujo de datos */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-bold text-[#4E6851] mb-4 text-center">
            Flujo de Datos
          </h3>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#B83A2D] rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Componente 1</p>
            </div>
            <div className="flex-1 h-1 bg-[#4E6851] mx-4"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#DCC9A9] rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-[#4E6851]">
                <span className="text-[#4E6851] font-bold">2</span>
              </div>
              <p className="text-sm font-medium">Componente 2</p>
            </div>
            <div className="flex-1 h-1 bg-[#4E6851] mx-4"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#B83A2D] rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Componente 3</p>
            </div>
            <div className="flex-1 h-1 bg-[#4E6851] mx-4"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4E6851] rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">4</span>
              </div>
              <p className="text-sm font-medium">Componente 4</p>
            </div>
          </div>
        </div>

        {/* Componente 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4 text-center text-[#4E6851]">
            Componente 1 (Origen de los datos)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Datos originales */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#B83A2D] mb-3">Objeto Original</h4>
              <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
                {JSON.stringify(datosUsuario, null, 2)}
              </pre>
            </div>
            
            {/* Explicación */}
            <div className="bg-[#f8f6f2] p-4 rounded-lg border-l-4 border-[#4E6851]">
              <h4 className="font-bold text-[#4E6851] mb-2">¿Qué está pasando?</h4>
              <p className="text-sm text-gray-700">
                El Componente 1 crea el objeto y lo pasa como prop al Componente 2, 
                luego al 3, y finalmente al 4 donde se muestra en la tarjeta.
              </p>
            </div>
          </div>
        </div>

        {/* Cadena de componentes anidados */}
        <Componente2 datos={datosUsuario} />

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#4E6851] hover:text-[#B83A2D] font-bold px-4 py-2 border-2 border-[#4E6851] rounded-lg hover:bg-[#4E6851] hover:text-white transition-all"
          >
            <span>←</span>
            Volver a la Carátula
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio2;