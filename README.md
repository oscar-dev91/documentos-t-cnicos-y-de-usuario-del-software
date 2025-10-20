# 📘 Documentos Técnicos y de Usuario del Software

Proyecto web desarrollado en **React + TailwindCSS**, orientado a la documentación técnica y de usuario de un sistema de software.  
El objetivo es centralizar, visualizar y gestionar de forma clara los manuales, scripts de instalación, diagramas y procesos de mantenimiento asociados al ciclo de vida del software.

---

## 🚀 Características principales

- 🧩 **Interfaz modular:** componentes independientes para manuales, diagramas, scripts y procesos.
- 🎨 **Estilos modernos con TailwindCSS:** diseño limpio, responsivo y personalizable.
- 📋 **Copiado rápido de scripts:** botón de copiar en cada bloque de código SQL o Bash.
- 📚 **Datos centralizados:** toda la información se gestiona desde un archivo `manual.js`.
- ⚡ **Vite + React:** compilación rápida y experiencia de desarrollo fluida.

---

## 🗂️ Estructura del proyecto

```bash
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── Scripts.jsx
 │   ├── Manual.jsx
 │   ├── Diagram.jsx
 │   └── Maintenance.jsx
 ├── data/
 │   └── manual.js
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── ...
```
* components/ → Contiene los módulos visuales reutilizables.
* data/manual.js → Archivo central con los contenidos del manual (texto, scripts, diagramas, etc.).
* index.css → Configuración de Tailwind y estilos globales.
* main.jsx / App.jsx → Punto de entrada y estructura principal de la aplicación.

## ⚙️ Instalación y ejecución
### 1️⃣ Clonar el repositorio
```bash
npm install
```

### 2️⃣ Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Abre el proyecto en tu navegador en
👉 http://localhost:5173

## 🧾 Contenido de los manuales

Toda la información técnica y de usuario se encuentra en src/data/manual.js.

Desde este archivo se pueden agregar:
* Descripciones de procesos técnicos.
* Diagramas de arquitectura.
* Scripts SQL y Bash para instalación o despliegue.
* Procedimientos de mantenimiento y respaldo.
* Cada sección se carga dinámicamente en los componentes React correspondientes.

## 🧑‍💻 Autor

**Oscar Palomino**

📍 Proyecto formativo SENA – Componente: Documentos Técnicos y de Usuario del Software

📅 Año: 2025