'use client';
import React from 'react';

// Componente 1: Header
const Header = () => {
  return (
    <header className="bg-[#4E6851] text-white p-6 text-center">
      <h1 className="text-2xl font-bold">Mi Sitio Web</h1>
      <p className="mt-2">Diseño responsivo con 7 componentes</p>
    </header>
  );
};

// Componente 2: Navigation
const Navigation = () => {
  return (
    <nav className="bg-[#B83A2D] text-white p-4">
      <div className="flex justify-center space-x-6">
        <a href="#home" className="hover:bg-white hover:text-[#B83A2D] px-3 py-1 rounded">Inicio</a>
        <a href="#about" className="hover:bg-white hover:text-[#B83A2D] px-3 py-1 rounded">Nosotros</a>
        <a href="#services" className="hover:bg-white hover:text-[#B83A2D] px-3 py-1 rounded">Servicios</a>
        <a href="#contact" className="hover:bg-white hover:text-[#B83A2D] px-3 py-1 rounded">Contacto</a>
      </div>
    </nav>
  );
};

// Componente 3: Main Article
const MainArticle = () => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-[#4E6851] mb-4">Artículo Principal</h2>
      <p className="text-gray-700 mb-3">
        Este es el contenido principal de la página. Aquí va la información más importante.
      </p>
      <p className="text-gray-700">
        El diseño es completamente responsivo y se adapta a diferentes dispositivos.
      </p>
    </article>
  );
};

// Componente 4: Aside
const Aside = () => {
  return (
    <aside className="bg-[#DCC9A9] p-4 rounded-lg">
      <h3 className="font-bold text-[#4E6851] mb-2">Barra Lateral</h3>
      <p className="text-gray-700">Contenido adicional y enlaces relacionados.</p>
    </aside>
  );
};

// Componente 5: Secondary Article
const SecondaryArticle = () => {
  return (
    <article className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#B83A2D]">
      <h3 className="font-bold text-[#B83A2D] mb-2">Artículo Secundario</h3>
      <p className="text-gray-700">Este artículo está dentro del aside con información complementaria.</p>
    </article>
  );
};

// Componente 6: Main Section
const MainSection = () => {
  return (
    <section className="bg-gray-100 p-6 min-h-[400px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Article ocupa 2 columnas en desktop */}
        <div className="lg:col-span-2">
          <MainArticle />
        </div>
        
        {/* Aside container ocupa 1 columna en desktop */}
        <div className="space-y-4">
          <Aside />
          <SecondaryArticle />
        </div>
      </div>
    </section>
  );
};

// Componente 7: Footer
const Footer = () => {
  return (
    <footer className="bg-[#4E6851] text-white p-6 text-center">
      <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
};

// Componente principal
const Ejercicio1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <MainSection />
      <Footer />
      
      {/* Botón para volver */}
      <div className="fixed bottom-4 right-4">
        <a 
          href="/" 
          className="bg-[#B83A2D] text-white px-4 py-2 rounded-lg hover:bg-[#9c3126] transition-colors"
        >
          ← Volver
        </a>
      </div>
    </div>
  );
};

export default Ejercicio1;