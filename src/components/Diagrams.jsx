import React from "react";
import { manual } from "../data/manual";

function Diagrams() {
  const { useCases, erModel, componentDiagram } = manual;

  return (
    <>
      <div className="card mt-6" id="diagrama-casos-uso">
        <h4 className="font-semibold">{useCases.title}</h4>
        <p className="mt-2 text-sm text-gray-700">{useCases.description}</p>
        <pre className="mt-3 p-3 bg-slate-50 text-sm rounded overflow-auto">
          <code>{useCases.diagram}</code>
        </pre>
        <p className="text-xs text-gray-500 mt-2">
          Copia el bloque a <a href="https://mermaid.live" className="text-blue-600 underline">https://mermaid.live</a> para renderizarlo.
        </p>
      </div>

      <div className="card mt-6">
        <h4 className="font-semibold">{erModel.title}</h4>
        <p className="mt-2 text-sm text-gray-700">{erModel.description}</p>
        <pre className="mt-3 p-3 bg-slate-50 text-sm rounded overflow-auto">
          <code>{erModel.diagram}</code>
        </pre>
        <p className="text-xs text-gray-500 mt-2">
          Copia el bloque a <a href="https://mermaid.live" className="text-blue-600 underline">https://mermaid.live</a> para renderizarlo.
        </p>
      </div>

      <div className="card mt-6">
        <h4 className="font-semibold">{componentDiagram.title}</h4>
        <p className="mt-2 text-sm text-gray-700">{componentDiagram.description}</p>
        <pre className="mt-3 p-3 bg-slate-50 text-sm rounded overflow-auto">
          <code>{componentDiagram.diagram}</code>
        </pre>
        <p className="text-xs text-gray-500 mt-2">
          Copia el bloque a <a href="https://mermaid.live" className="text-blue-600 underline">https://mermaid.live</a> para renderizarlo.
        </p>
      </div>
    </>
  );
}

export default Diagrams;
