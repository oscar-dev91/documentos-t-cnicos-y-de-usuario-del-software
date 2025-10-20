import React from "react";

function Section({ title, children }) {
  return (
    <section className="card mt-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-sm text-gray-600 mt-3">{children}</div>
    </section>
  );
}

function ManualSections({ data }) {
  return (
    <>
      <Section title={data.prerequisites.title}>
        <ul className="list-disc list-inside">
          {data.prerequisites.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
        <p className="mt-2 text-xs text-gray-500">{data.prerequisites.notes}</p>
      </Section>

      <Section title={data.frameworks.title}>
        <ul className="list-disc list-inside">
          {data.frameworks.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      </Section>

      <Section title={data.dataDictionary.title}>
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="pb-2">Campo</th>
              <th className="pb-2">Tipo</th>
              <th className="pb-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {data.dataDictionary.fields.map((f, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{f.name}</td>
                <td className="py-2">{f.type}</td>
                <td className="py-2 text-gray-600">{f.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}

export default ManualSections;