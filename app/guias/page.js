"use client"
import Navbar from "../components/Navbar"
import Link from "next/link"
import MusicPlayer from "../components/MusicPlayer"
import Cursor from "../components/Cursor"

export default function Guias() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Cursor />
      <MusicPlayer />

      {/* Fondo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0533_0%,_#0a0a0f_60%)]"></div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        
        <div className="mb-6 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Guías y Tutoriales</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="text-white">Elige una</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">categoría</span>
        </h1>

        <p className="text-gray-400 text-lg mb-12 max-w-xl">
          Guías creadas desde la experiencia real. Elige entre detección de hacks o moderación de servidores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
          
          {/* Hacks */}
          <Link href="/guias/hacks" className="group bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 hover:-translate-y-2 text-left">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-black text-white mb-2 group-hover:text-red-400 transition-colors duration-300">Detección de Hacks</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Aprende a hacer screenshares profesionales y detectar cheaters en servidores de Minecraft.</p>
            <div className="flex gap-2">
              <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/20">Básico</span>
              <span className="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/20">Medio</span>
              <span className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded-full border border-red-500/20">Avanzado</span>
            </div>
          </Link>

          {/* Moderación */}
          <Link href="/guias/moderacion" className="group bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-2 text-left">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Moderación</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Guías para cada rol del staff, tanto en Discord como en Minecraft. Desde Helper hasta Manager.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-500/20">Discord</span>
              <span className="bg-pink-500/10 text-pink-400 text-xs px-2 py-1 rounded-full border border-pink-500/20">Minecraft</span>
            </div>
          </Link>

        </div>

        <Link href="/" onClick={() => sessionStorage.setItem("visitaInterna", "true")} className="mt-12 text-gray-600 hover:text-purple-400 transition-colors duration-200 text-sm">
  ← Volver al portafolio
</Link>

      </section>
    </main>
  )
}