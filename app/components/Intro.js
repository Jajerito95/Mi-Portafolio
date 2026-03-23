"use client"
import { useEffect, useState } from "react"

export default function Intro({ onComplete }) {
  const [fase, setFase] = useState(0)
  const [saliendo, setSaliendo] = useState(false)
  const [typing, setTyping] = useState("")
  const [esperandoClick, setEsperandoClick] = useState(false)
  const password = "••••••••••••"

  useEffect(() => {
    setTimeout(() => setFase(1), 500)
    setTimeout(() => setFase(2), 1200)
    setTimeout(() => setFase(3), 1900)

    setTimeout(() => {
      let k = 0
      const interval = setInterval(() => {
        if (k < password.length) {
          setTyping((prev) => prev + "•")
          k++
        } else {
          clearInterval(interval)
        }
      }, 80)
    }, 2200)

    setTimeout(() => setFase(4), 3800)
    setTimeout(() => setEsperandoClick(true), 4800)
  }, [])

  const handleClick = () => {
    // Intentar reproducir música
    try {
      const audio = new Audio("/musica.mp3")
      audio.loop = true
      audio.volume = 0.3
      audio.play()
      window.__musicPlayer = audio
    } catch (e) {}

    setSaliendo(true)
    setTimeout(() => onComplete(), 1000)
  }

  return (
    <div
      onClick={esperandoClick ? handleClick : undefined}
      className={`fixed inset-0 z-[100] bg-[#05020f] flex items-center justify-center transition-opacity duration-1000 ${saliendo ? "opacity-0" : "opacity-100"} ${esperandoClick ? "cursor-pointer" : ""}`}
    >

      {/* Fondo cuadrícula */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(147,51,234,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#05020f_80%)]"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 grid grid-cols-3 gap-4">

        {/* PANEL IZQUIERDO */}
        <div className={`col-span-1 border border-purple-700/60 bg-black/60 rounded p-4 font-mono text-xs transition-all duration-700 ${fase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className="text-purple-400 font-bold mb-3 text-sm border-b border-purple-700/40 pb-2">⬡ IDENTIFICACIÓN</div>
          <div className="space-y-2 text-purple-300">
            <div className="flex justify-between"><span className="text-purple-500">ID:</span><span>RKS-0077</span></div>
            <div className="flex justify-between"><span className="text-purple-500">USUARIO:</span><span>ReyKamiS5</span></div>
            <div className="flex justify-between"><span className="text-purple-500">ROL:</span><span>Staff / Dev</span></div>
            <div className="flex justify-between"><span className="text-purple-500">ORIGEN:</span><span>España</span></div>
            <div className="mt-3 pt-2 border-t border-purple-700/40">
              <span className="text-purple-500">CONTRASEÑA: </span>
              <span className="text-pink-400">{typing}</span>
              {typing.length < password.length && fase >= 2 && (
                <span className="animate-pulse text-purple-400">▋</span>
              )}
            </div>
          </div>
        </div>

        {/* PANEL CENTRAL */}
        <div className={`col-span-1 border border-purple-700/60 bg-black/60 rounded p-4 font-mono text-xs transition-all duration-700 ${fase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className="text-purple-400 font-bold mb-3 text-sm border-b border-purple-700/40 pb-2">⬡ NIVEL DE ACCESO</div>
          <div className="space-y-3 text-purple-300">
            <div>
              <div className="flex justify-between mb-1"><span className="text-purple-500">MODERACIÓN</span><span className="text-pink-400">100%</span></div>
              <div className="w-full bg-purple-900/30 rounded-full h-1.5"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full w-full"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1"><span className="text-purple-500">DESARROLLO</span><span className="text-pink-400">60%</span></div>
              <div className="w-full bg-purple-900/30 rounded-full h-1.5"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full w-[60%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1"><span className="text-purple-500">GAMING</span><span className="text-pink-400">95%</span></div>
              <div className="w-full bg-purple-900/30 rounded-full h-1.5"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full w-[95%]"></div></div>
            </div>
            <div className="mt-3 pt-2 border-t border-purple-700/40 text-center">
              {fase >= 4 ? (
                <span className="text-green-400 font-bold animate-pulse">✓ ACCESO CONCEDIDO</span>
              ) : (
                <span className="text-yellow-500 animate-pulse">⟳ VERIFICANDO...</span>
              )}
            </div>
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div className={`col-span-1 border border-purple-700/60 bg-black/60 rounded p-4 font-mono text-xs transition-all duration-700 ${fase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className="text-purple-400 font-bold mb-3 text-sm border-b border-purple-700/40 pb-2">⬡ SISTEMAS</div>
          <div className="space-y-2 text-purple-300">
            {[
              { nombre: "Portafolio", estado: "ONLINE" },
              { nombre: "Discord", estado: "ONLINE" },
              { nombre: "Instagram", estado: "ONLINE" },
              { nombre: "Vercel", estado: "ONLINE" },
              { nombre: "GitHub", estado: "ONLINE" },
              { nombre: "Guías", estado: "PRONTO" },
            ].map((sistema) => (
              <div key={sistema.nombre} className="flex justify-between items-center">
                <span className="text-purple-400">{sistema.nombre}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  sistema.estado === "ONLINE" ? "text-green-400 bg-green-900/20" :
                  sistema.estado === "OFFLINE" ? "text-red-400 bg-red-900/20" :
                  "text-yellow-400 bg-yellow-900/20"
                }`}>{sistema.estado}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className={`col-span-3 border border-purple-700/60 bg-black/60 rounded px-4 py-3 font-mono text-xs text-center transition-all duration-700 ${fase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {esperandoClick ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold text-sm animate-pulse">
              ▶ HAZ CLIC PARA CONTINUAR
            </span>
          ) : fase >= 4 ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold text-sm animate-pulse">
              ✓ BIENVENIDO, ReyKamiS5 — CARGANDO PORTAFOLIO...
            </span>
          ) : (
            <span className="text-purple-600">SISTEMA INICIALIZANDO...</span>
          )}
        </div>

      </div>
    </div>
  )
}