import React from "react";

function Hero() {
  return (
    <section className="card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" id="manual-tecnico-usuario">Manual Técnico y de Usuario</h1>
          <p className="text-sm text-gray-600 mt-2">
            Documento técnico para la aplicación desarrollada en el proceso formativo.
            Contiene prerrequisitos, frameworks, diagramas, diccionario de datos y scripts.
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gradient-to-br from-sky-900 to-teal-600 text-white rounded-xl p-4">
            <h4 className="font-semibold">Evidencia</h4>
            <p className="text-xs mt-1">GA10-220501097-AA10-EV01</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;