import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container py-6 flex items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} - Manual Técnico</div>
        <div>Referencia: GA10-220501097-AA10-EV01 • ISO/IEC 14724</div>
      </div>
    </footer>
  );
}

export default Footer;