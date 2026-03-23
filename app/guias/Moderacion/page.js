"use client"
import Navbar from "../../components/Navbar"
import MusicPlayer from "../../components/MusicPlayer"
import Cursor from "../../components/Cursor"
import Link from "next/link"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import ReactMarkdown from "react-markdown"

const secciones = [
  {
    id: "discord",
    emoji: "💬",
    titulo: "Discord",
    descripcion: "Aprende a moderar comunidades de Discord en cada rol del staff.",
    color: "from-[#5865F2] to-[#4752c4]",
    borderHover: "hover:border-[#5865F2]/50",
    tag: "text-[#5865F2] bg-[#5865F2]/10 border-[#5865F2]/20",
    guias: [
      {
        nivel: "Learner / Helper",
        tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
        emoji: "🌱",
        titulo: "Cómo ser un buen Helper",
        resumen: "Aprende las bases para destacar como Helper en cualquier servidor.",
        contenido: `
## ¿Qué es un Helper?
El Helper es el primer escalón del staff. No tendrás muchos comandos, pero eso no es lo importante.

## Actitud y comportamiento

### Equilibrio
No seas demasiado serio ni demasiado divertido. Encuentra un punto medio profesional pero cercano.

### Actividad
Sé activo y demuestra ganas de mejorar constantemente. La actividad es lo primero que evalúan los superiores.

### Comunicación
Si vas a faltar una semana, avísalo. No pierdes nada y te da puntos porque demuestra responsabilidad y respeto hacia el equipo.

## Tu verdadera herramienta
Los comandos son solo soluciones rápidas. Lo que de verdad puedes hacer como Helper es:

- Atender tickets con paciencia y eficacia
- Ganarte la confianza del Manager y del Owner
- Demostrar que puedes gestionar situaciones sin necesitar comandos
- Ser el puente entre los jugadores y el staff superior

## Resumen
Un buen Helper no es el que más sanciona, sino el que mejor gestiona. Enfócate en la confianza y el resto vendrá solo.
        `
      },
      {
        nivel: "Moderador",
        tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        emoji: "🛡️",
        titulo: "Guía de Moderador",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "High Staff",
        tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        emoji: "⚔️",
        titulo: "Guía de High Staff",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "Head",
        tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
        emoji: "👑",
        titulo: "Guía de Head",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "Manager",
        tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
        emoji: "🔱",
        titulo: "Guía de Manager",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
    ]
  },
  {
    id: "minecraft",
    emoji: "⛏️",
    titulo: "Minecraft",
    descripcion: "Aprende a moderar servidores de Minecraft en cada rol del staff.",
    color: "from-green-600 to-green-800",
    borderHover: "hover:border-green-500/50",
    tag: "text-green-400 bg-green-500/10 border-green-500/20",
    guias: [
      {
        nivel: "Learner / Helper",
        tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
        emoji: "🌱",
        titulo: "Cómo ser un buen Helper",
        resumen: "Aprende las bases para destacar como Helper en servidores de Minecraft.",
        contenido: `
## ¿Qué es un Helper en Minecraft?
El Helper es el primer escalón del staff en servidores de Minecraft. No tendrás muchos comandos, pero eso no es lo importante.

## Actitud y comportamiento

### Equilibrio
No seas demasiado serio ni demasiado divertido. Encuentra un punto medio profesional pero cercano.

### Actividad
Sé activo y demuestra ganas de mejorar constantemente. La actividad es lo primero que evalúan los superiores.

### Comunicación
Si vas a faltar una semana, avísalo. No pierdes nada y te da puntos porque demuestra responsabilidad y respeto hacia el equipo.

## Tu verdadera herramienta
Los comandos son solo soluciones rápidas. Lo que de verdad puedes hacer como Helper es:

- Atender a los jugadores con paciencia y eficacia
- Ganarte la confianza del Manager y del Owner
- Demostrar que puedes gestionar situaciones sin necesitar comandos
- Ser el puente entre los jugadores y el staff superior

## Resumen
Un buen Helper no es el que más sanciona, sino el que mejor gestiona. Enfócate en la confianza y el resto vendrá solo.
        `
      },
      {
        nivel: "Moderador",
        tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        emoji: "🛡️",
        titulo: "Guía de Moderador",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "High Staff",
        tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        emoji: "⚔️",
        titulo: "Guía de High Staff",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "Head",
        tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
        emoji: "👑",
        titulo: "Guía de Head",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
      {
        nivel: "Manager",
        tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
        emoji: "🔱",
        titulo: "Guía de Manager",
        resumen: "Próximamente — esta guía estará disponible pronto.",
        contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
      },
    ]
  }
]

export default function ModeracionPage() {
  const [seccionActiva, setSeccionActiva] = useState(null)
  const [guiaAbierta, setGuiaAbierta] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (guiaAbierta) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [guiaAbierta])

  const modal = guiaAbierta && (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={() => setGuiaAbierta(null)}
    >
      <div
        style={{ backgroundColor: "#0f0f17", border: "1px solid rgba(147,51,234,0.3)", borderRadius: "1rem", padding: "2rem", maxWidth: "42rem", width: "100%", maxHeight: "80vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full border ${guiaAbierta.tagColor} mb-2 inline-block`}>{guiaAbierta.nivel}</span>
            <h2 style={{ color: "white", fontWeight: 900, fontSize: "1.5rem" }}>{guiaAbierta.titulo}</h2>
          </div>
          <button onClick={() => setGuiaAbierta(null)} style={{ color: "#6b7280", fontSize: "1.5rem", background: "none", border: "none", cursor: "none" }}>✕</button>
        </div>
        <div>
          <ReactMarkdown
            components={{
              h2: ({children}) => <h2 style={{ color: "white", fontWeight: 900, fontSize: "1.25rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>{children}</h2>,
              h3: ({children}) => <h3 style={{ color: "#c084fc", fontWeight: 700, fontSize: "1rem", marginTop: "1rem", marginBottom: "0.5rem" }}>{children}</h3>,
              p: ({children}) => <p style={{ color: "#d1d5db", marginBottom: "0.75rem", lineHeight: "1.6" }}>{children}</p>,
              li: ({children}) => <li style={{ color: "#d1d5db", marginBottom: "0.25rem", marginLeft: "1rem", listStyleType: "disc" }}>{children}</li>,
              ul: ({children}) => <ul style={{ marginBottom: "0.75rem" }}>{children}</ul>,
              strong: ({children}) => <strong style={{ color: "white", fontWeight: 700 }}>{children}</strong>,
              code: ({children}) => <code style={{ backgroundColor: "rgba(147,51,234,0.2)", color: "#f9a8d4", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontFamily: "monospace", fontSize: "0.75rem" }}>{children}</code>,
            }}
          >
            {guiaAbierta.contenido}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Cursor />
      <MusicPlayer />

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0533_0%,_#0a0a0f_60%)]"></div>
      </div>

      <section className="relative z-10 pt-32 pb-20 px-4 max-w-5xl mx-auto">

        {!seccionActiva ? (
          <>
            <div className="text-center mb-16">
              <Link href="/guias" className="text-gray-500 hover:text-purple-400 transition-colors duration-200 text-sm mb-6 block">
                ← Volver a guías
              </Link>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Moderación</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Elige una <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">plataforma</span>
              </h1>
              <p className="text-gray-400 text-lg">Guías de moderación para Discord y Minecraft</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {secciones.map((seccion) => (
                <div
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion)}
                  className={`bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 ${seccion.borderHover} rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center`}
                >
                  <div className="text-5xl mb-4">{seccion.emoji}</div>
                  <h2 className="text-2xl font-black text-white mb-2">{seccion.titulo}</h2>
                  <p className="text-gray-400 text-sm">{seccion.descripcion}</p>
                  <div className="mt-4 text-purple-400 text-sm font-semibold">Ver guías →</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-16">
              <button onClick={() => setSeccionActiva(null)} className="text-gray-500 hover:text-purple-400 transition-colors duration-200 text-sm mb-6 block mx-auto">
                ← Volver a plataformas
              </button>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">{seccionActiva.emoji} {seccionActiva.titulo}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Moderación en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{seccionActiva.titulo}</span>
              </h1>
              <p className="text-gray-400 text-lg">Guías para cada rol del staff</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seccionActiva.guias.map((guia, i) => (
                <div
                  key={i}
                  onClick={() => setGuiaAbierta(guia)}
                  className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-500/50"
                >
                  <div className="text-4xl mb-4">{guia.emoji}</div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${guia.tagColor} mb-3 inline-block`}>{guia.nivel}</span>
                  <h3 className="font-black text-white text-xl mb-2">{guia.titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{guia.resumen}</p>
                  <div className="mt-4 text-purple-400 text-sm font-semibold">Ver guía →</div>
                </div>
              ))}
            </div>
          </>
        )}

      </section>

      {mounted && createPortal(modal, document.body)}
    </main>
  )
}