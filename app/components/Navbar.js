"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState("inicio")

  useEffect(() => {
    const secciones = ["inicio", "sobre-mi", "discord", "guias", "contacto"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )
    secciones.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = [
    { href: "#inicio", label: "Inicio", id: "inicio" },
    { href: "#sobre-mi", label: "Sobre mí", id: "sobre-mi" },
    { href: "#discord", label: "Staff", id: "discord" },
    { href: "#guias", label: "Guías", id: "guias" },
    { href: "#contacto", label: "Contacto", id: "contacto" },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        <a href="#inicio" className="text-xl font-bold">
          <span className="text-white">Rey</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kami</span>
          <span className="text-white">S5</span>
        </a>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <a key={link.id} href={link.href} className={`transition-all duration-200 relative pb-1 ${seccionActiva === link.id ? "text-purple-400" : "text-gray-400 hover:text-purple-400"}`}>
              {link.label}
              {seccionActiva === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 animate-pulse"></span>
              )}
            </a>
          ))}
        </div>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
        >
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuAbierto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 flex flex-col gap-2 border-t border-purple-900/30 pt-4">
          {links.map((link) => (
            <a key={link.id} href={link.href} onClick={() => setMenuAbierto(false)} className={`transition-colors duration-200 py-2 ${seccionActiva === link.id ? "text-purple-400 font-semibold" : "text-gray-400 hover:text-purple-400"}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
     
    </nav>
  )
}