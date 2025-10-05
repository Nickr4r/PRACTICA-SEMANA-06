'use client';
import React, { useState, createContext, useContext } from 'react';

// Context para compartir datos entre hermanos
const DatosContext = createContext();

// Componente Hermano 1 (Envía datos)
const Hermano1 = () => {
  const { setDatos } = useContext(DatosContext);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleEnviar = () => {
    if (nombre.trim() && apellido.trim()) {
      setDatos({ nombre, apellido });
      setNombre('');
      setApellido('');
    }
  };

  return (
    <div className="p-6 bg-[#B83A2D] rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Hermano 1 (Remitente)</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 rounded text-gray-800"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label className="block mb-2">Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="w-full px-3 py-2 rounded text-gray-800"
            placeholder="Ingresa tu apellido"
          />
        </div>
        <button
          onClick={handleEnviar}
          className="bg-[#4E6851] hover:bg-[#3d5340] w-full py-2 rounded font-bold"
        >
          Enviar al Hermano 2
        </button>
      </div>
    </div>
  );
};

// Componente Hermano 2 (Recibe datos)
const Hermano2 = () => {
  const { datos } = useContext(DatosContext);

  return (
    <div className="p-6 bg-[#4E6851] rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Hermano 2 (Destinatario)</h2>
      <div className="bg-white text-gray-800 p-4 rounded min-h-[100px]">
        {datos ? (
          <div>
            <p className="font-semibold">Datos recibidos:</p>
            <p className="text-lg mt-2">
              <strong>Nombre:</strong> {datos.nombre}
            </p>
            <p className="text-lg">
              <strong>Apellido:</strong> {datos.apellido}
            </p>
          </div>
        ) : (
          <p>Esperando datos del Hermano 1...</p>
        )}
      </div>
    </div>
  );
};

// Componente Padre
const Ejercicio4 = () => {
  const [datos, setDatos] = useState(null);

  return (
    <DatosContext.Provider value={{ datos, setDatos }}>
      <div className="min-h-screen bg-stone-900 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#4E6851] mb-8 text-center">
            Ejercicio 4: Comunicación entre Hermanos
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Hermano1 />
            <Hermano2 />
          </div>

          {/* Componente Padre visual */}
          <div className="mt-8 p-6 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Componente Padre (Context Provider)</h2>
            <p className="text-gray-600">
              Gestiona el estado global entre los componentes hermanos
            </p>
          </div>

          <div className="mt-8 text-center">
            <a href="/" className="text-[#4E6851] hover:text-[#B83A2D] font-bold">
              ← Volver a la Carátula
            </a>
          </div>
        </div>
      </div>
    </DatosContext.Provider>
  );
};

export default Ejercicio4;