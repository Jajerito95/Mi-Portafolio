"use client"
import { useState } from "react"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="text-xl font-bold">
          <span className="text-white">Rey</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kami</span>
          <span className="text-white">S5</span>
        </a>

        {/* Links — solo visible en pantallas grandes */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#inicio" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Inicio</a>
          <a href="#sobre-mi" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Sobre mí</a>
          <a href="#discord" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Staff</a>
          <a href="#guias" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Guías</a>
          <a href="#contacto" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contacto</a>
        </div>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
        >
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuAbierto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 flex flex-col gap-2 border-t border-purple-900/30 pt-4">
          <a href="#inicio" onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2">Inicio</a>
          <a href="#sobre-mi" onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2">Sobre mí</a>
          <a href="#discord" onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2">Staff</a>
          <a href="#guias" onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2">Guías</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)} className="text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2">Contacto</a>
        </div>
      </div>

    </nav>
  )
}