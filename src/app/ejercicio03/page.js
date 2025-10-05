'use client';
import React, { useState } from 'react';

// Componente Hijo
const Hijo = ({ onEnviarDato }) => {
  const [inputValue, setInputValue] = useState('');

  const handleEnviar = () => {
    if (inputValue.trim()) {
      onEnviarDato(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="p-6 bg-[#4E6851] rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Componente Hijo</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 px-3 py-2 rounded text-gray-800"
        />
        <button
          onClick={handleEnviar}
          className="bg-[#B83A2D] hover:bg-[#9c3126] px-4 py-2 rounded font-bold"
        >
          Enviar al Padre
        </button>
      </div>
    </div>
  );
};

// Componente Padre
const Ejercicio3 = () => {
  const [datoDelHijo, setDatoDelHijo] = useState('');

  const recibirDatoDelHijo = (dato) => {
    setDatoDelHijo(dato);
  };

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4E6851] mb-8 text-center">
          Ejercicio 3: Comunicación Hijo → Padre
        </h1>
        
        <div className="grid gap-8">
          {/* Componente Padre */}
          <div className="p-6 bg-[#B83A2D] rounded-lg text-white">
            <h2 className="text-xl font-bold mb-4">Componente Padre</h2>
            <div className="bg-white text-gray-800 p-4 rounded min-h-[60px]">
              <p className="font-semibold">Dato recibido del hijo:</p>
              <p className="text-lg mt-2">{datoDelHijo || 'Esperando datos...'}</p>
            </div>
          </div>

          {/* Componente Hijo */}
          <Hijo onEnviarDato={recibirDatoDelHijo} />
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

export default Ejercicio3;