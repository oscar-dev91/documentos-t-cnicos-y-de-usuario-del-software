import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ManualSections from "./components/ManualSections";
import Diagrams from "./components/Diagrams";
import Scripts from "./components/Scripts";
import Footer from "./components/Footer";
import { manual } from "./data/manual";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Manual Técnico - GA10-220501097-AA10-EV01" />
      <main className="container py-10 flex-1">
        <Hero />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ManualSections data={manual} />
            <Diagrams data={manual} />
            <Scripts />
          </div>
          <aside className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold">Resumen</h3>
              <p className="text-sm text-gray-600 mt-2">
                Documento técnico y de usuario para la aplicación del proyecto formativo.
                Incluye prerrequisitos, frameworks, diagramas, diccionario de datos y scripts.
              </p>
            </div>

            
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}