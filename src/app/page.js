// app/page.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const exercises = [
    { id: 1, name: 'Ejercicio 1', path: '/ejercicio01', color: 'bg-[#4E6851] hover:bg-[#3d5340]' },
    { id: 2, name: 'Ejercicio 2', path: '/ejercicio02', color: 'bg-[#B83A2D] hover:bg-[#9c3126]' },
    { id: 3, name: 'Ejercicio 3', path: '/ejercicio03', color: 'bg-[#CFB99B] hover:bg-[#D4B28C]' },
    { id: 4, name: 'Ejercicio 4', path: '/ejercicio04', color: 'bg-[#4E6851] hover:bg-[#3d5340]' },
    { id: 5, name: 'Ejercicio 5', path: '/ejercicio05', color: 'bg-[#B83A2D] hover:bg-[#9c3126]' },
  ];

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col relative overflow-hidden text-stone-900">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-32 h-32 border-4 border-[#B83A2D] rounded-full opacity-20 top-10 right-10"></div>
        <div className="absolute w-24 h-24 border-4 border-[#4E6851] rounded-full opacity-20 bottom-20 left-10"></div>
        <div className="absolute w-40 h-1 bg-[#B83A2D] opacity-20 top-1/3 left-1/4 rotate-45"></div>
      </div>

      {/* Header con título pequeño */}
      <header className="pt-6 px-8 relative z-10">
        <div className="text-center">
          {/* Línea decorativa superior */}
          <div className="w-24 h-0.5 bg-[#B83A2D] mx-auto mb-4"></div>
          
          {/* Título pequeño */}
          <h1 className="text-2xl md:text-3xl font-black tracking-widest uppercase text-[#CFB99B]">
            EJERCICIOS APLICATIVOS CON REACT
          </h1>
          
          {/* Subtítulo muy pequeño */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#CFB99B]">
              EJERCICIOS
            </span>
            <span className="text-[#4E6851] text-xs">•</span>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#CFB99B]">
              SEMANA 06
            </span>
          </div>
          
          {/* Línea decorativa inferior */}
          <div className="w-16 h-0.5 bg-[#4E6851] mx-auto mt-4"></div>
        </div>
      </header>

      {/* Contenido principal con botones */}
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="text-center max-w-2xl w-full relative z-10">

          {/* Grid de botones */}
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={exercise.path}
                className={`${exercise.color}  font-bold py-6 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 text-lg tracking-wider uppercase`}
              >
                {exercise.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;