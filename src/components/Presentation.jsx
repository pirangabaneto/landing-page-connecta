// src/components/Presentation.jsx
import React from "react";

const Presentation = () => {
  return (
    <section
      id="presentation"
      className="w-screen h-screen bg-[#EBF1FC] flex items-center justify-center"
    >
      <div className="text-center">
        <p className="text-7xl font-bold text-[#3570AB] mb-6">
          Olá, eu sou o Seu Dentista
        </p>
        <p className="text-lg text-[#101112] mb-8">
          Descubra como podemos transformar sua vida através da sua boca!
        </p>
        <button className="bg-[#3570AB] px-16 py-6 text-white">
          Fale Comigo
        </button>
      </div>
    </section>
  );
};

export default Presentation;
