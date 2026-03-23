"use client"
import Navbar from "../../components/Navbar"
import MusicPlayer from "../../components/MusicPlayer"
import Cursor from "../../components/Cursor"
import Link from "next/link"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import ReactMarkdown from "react-markdown"

const guias = [
  {
    nivel: "Básico",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
    emoji: "🟢",
    titulo: "Screenshare Básica",
    resumen: "Guía completa para hacer una screenshare profesional paso a paso.",
    contenido: `
## ¿Qué es una Screenshare?
Una screenshare (SS) es revisar el PC de un jugador sospechoso de hacks usando AnyDesk. Pídele que lo instale desde anydesk.com y conéctate con su ID.

## Pasos completos

### 1. Verificar que no grabe
Antes de nada, comprueba que no esté grabando cómo haces la SS.

- Mira los iconos del segundo plano buscando OBS u otros grabadores
- Abre el Administrador de Tareas (Ctrl+Shift+Esc) y revisa procesos
- Revisa las extensiones del navegador, algunos graban desde ahí
- Avísale que grabar la SS está prohibido

### 2. Elementos recientes
Pulsa Win+R y escribe %appdata%, luego navega a Microsoft, Windows, Recent Items. Verás todos los archivos abiertos recientemente.

### 3. Mostrar archivos ocultos
Ve a Ajustes de carpeta, Ver, desmarca Ocultar archivos protegidos del sistema y pulsa Aplicar. Ahora verás todos los archivos.

### 4. Revisar .minecraft
Pulsa Win+R, escribe %appdata% y entra a .minecraft. Revisa estas carpetas:

- screenshots, por si tiene capturas sospechosas
- shaderpacks, algunos hacks se camuflan como shaders
- versions, busca versiones raras o modificadas
- mods, revisa cada mod instalado

### 5. Buscar jnativehook
Pulsa Win+R y escribe %temp%. Busca el archivo jnativehook, es una librería usada por muchos hacks. Si no aparece, pulsa Win+R, escribe prefetch y busca tanto el nombre del hack como jnativehook.

### 6. Dentro de Minecraft
- Ve a Opciones, Controles y busca teclas raras bindeadas a un menú de hacks
- Revisa Resource Packs, el Xray se camufla como pack de texturas
- Pulsa F3 para ver la versión exacta del juego

### 7. Papelera de reciclaje
Pulsa Win+R y escribe C:/Recycle.bin. Revisa los archivos borrados y su fecha de modificación. Si borró archivos justo antes de la SS es sospechoso.

### 8. CMD — Servicio DPS
Abre CMD como administrador y escribe sc query dps. Si dice RUNNING está normal. Cualquier otro estado indica que el jugador modificó el sistema.

### 9. PowerShell — MMAgent
Abre PowerShell y escribe Get-MMAgent. Si alguno de los 4 primeros valores está en False, el jugador modificó la memoria del sistema. Es señal clara de hacks.

### 10. Herramientas adicionales recomendadas
- Process Hacker, detecta procesos ocultos que el Administrador de Tareas no muestra
- Autoruns, muestra todo lo que se ejecuta al iniciar Windows
- Everything, buscador ultrarrápido para encontrar archivos sospechosos
    `
  },
  {
    nivel: "Medio",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    emoji: "🟡",
    titulo: "Revisión de Minecraft",
    resumen: "Próximamente — esta guía estará disponible pronto.",
    contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
  },
  {
    nivel: "Avanzado",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/20",
    emoji: "🔴",
    titulo: "Análisis del Sistema",
    resumen: "Próximamente — esta guía estará disponible pronto.",
    contenido: `## Próximamente\n\nEsta guía estará disponible pronto. Vuelve más tarde.`
  }
]

export default function HacksPage() {
  const [guiaAbierta, setGuiaAbierta] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
          <button onClick={() => setGuiaAbierta(null)} style={{ color: "#6b7280", fontSize: "1.5rem", background: "none", border: "none", cursor: "pointer" }}>✕</button>
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
        <div className="text-center mb-16">
          <Link href="/guias" className="text-gray-500 hover:text-purple-400 transition-colors duration-200 text-sm mb-6 block">
            ← Volver a guías
          </Link>
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span className="text-red-300 text-sm tracking-widest uppercase font-medium">Detección de Hacks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Guías de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Screenshare</span>
          </h1>
          <p className="text-gray-400 text-lg">Aprende a detectar cheaters en servidores de Minecraft</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guias.map((guia, i) => (
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
      </section>

      {mounted && createPortal(modal, document.body)}
    </main>
  )
}
