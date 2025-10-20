import React, { useState } from "react";
import { manual } from "../data/manual";

function Scripts() {
  const { scripts } = manual;
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // vuelve al estado normal después de 2s
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="card mt-6">
      <h4 className="font-semibold text-lg">{scripts.title}</h4>

      <div className="mt-4 space-y-6">
        {scripts.items.map((script, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm relative"
          >
            {/* Encabezado y botón copiar */}
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-medium text-gray-800">{script.name}</h5>
              <button
                onClick={() => handleCopy(script.code, index)}
                className={`text-xs px-3 py-1 rounded-md transition-all ${
                  copiedIndex === index
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 text-gray-700 hover:bg-slate-300"
                }`}
              >
                {copiedIndex === index ? "Copiado ✅" : "Copiar código"}
              </button>
            </div>

            <p className="text-sm text-gray-700">{script.description}</p>

            <pre className="mt-3 p-3 bg-slate-50 text-sm rounded-lg overflow-auto border border-slate-200">
              <code>{script.code}</code>
            </pre>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-5">
        Estos scripts pueden copiarse en archivos locales para automatizar la instalación y despliegue del sistema.
      </p>
    </div>
  );
}

export default Scripts;

