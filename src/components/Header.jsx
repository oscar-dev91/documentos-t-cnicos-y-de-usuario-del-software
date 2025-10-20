import React from "react";
import { FiGithub } from "react-icons/fi";

function Header({ title }) {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal-500 to-sky-600 flex items-center justify-center text-white font-bold">MT</div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-gray-500">Evidencia: GA10-220501097-AA10-EV01</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#manual-tecnico-usuario" className="text-gray-600 text-sm">Manual</a>
          <a href="#diagrama-casos-uso" className="text-gray-600 text-sm">Diagrama</a>
          <a className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50" href="https://github.com/oscar-dev91/documentos-t-cnicos-y-de-usuario-del-software">
            <FiGithub /> Repo
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;