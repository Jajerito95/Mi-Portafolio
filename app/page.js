import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />

      {/* Fondo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0533_0%,_#0a0a0f_60%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YXIiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuOCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMSIgZmlsbD0idXJsKCNzdGFyKSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjE1MCIgcj0iMC41IiBmaWxsPSJ1cmwoI3N0YXIpIi8+PGNpcmNsZSBjeD0iNzAiIGN5PSIxNzAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxNDAiIHI9IjAuNSIgZmlsbD0idXJsKCNzdGFyKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* SECCIÓN 1: HERO */}
      <section id="inicio" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <div className="mb-6 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Bienvenido a mi portafolio</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="text-white drop-shadow-lg">Rey</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kami</span>
          <span className="text-white drop-shadow-lg">S5</span>
        </h1>

        {/* Foto de perfil */}
        <div className="relative mb-6 w-32 h-32 mx-auto">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-xl shadow-purple-900/50">
            <img src="/avatar.jpg" alt="ReyKamiS5" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Joven apasionado por la tecnología y la comunidad gamer. 
          Empecé en el mundo del staff para combatir el problema de los 
          hackers que arruinaban la experiencia en servidores de Minecraft. 
          Me gusta descubrir cosas nuevas y aprender constantemente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#discord" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Ver mi experiencia →
          </a>
          <a href="#guias" className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/50 hover:border-pink-400/70 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:from-purple-500/20 hover:to-pink-500/20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Guías</span>
          </a>
          <a href="#contacto" className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Contacto
          </a>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-purple-400 opacity-60">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>

      </section>

      {/* SECCIÓN 2: STAFF */}
      {/* ESTADÍSTICAS */}
      <section className="relative z-10 py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">4</div>
            <div className="text-gray-400 text-sm font-medium">Servidores</div>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">8+</div>
            <div className="text-gray-400 text-sm font-medium">Meses de experiencia</div>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">1</div>
            <div className="text-gray-400 text-sm font-medium">Servidor propio fundado</div>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm font-medium">Ganas de aprender</div>
          </div>

        </div>
      </section>
      <section id="discord" className="relative z-10 py-24 px-4 max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Trayectoria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Experiencia como <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Staff</span>
          </h2>
          <p className="text-gray-400 text-lg">Servidores donde formé parte del equipo de moderación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-purple-900/50">S</div>
              <div>
                <h3 className="font-bold text-white text-xl">StarryMC</h3>
                <span className="text-purple-400 text-sm font-semibold bg-purple-400/10 px-2 py-0.5 rounded-full">Ex-Helper</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <span>⏱️</span><span>2 meses</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Formé parte del equipo de ayuda al jugador. Salí del servidor tras una acusación injusta de staff abuse.</p>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-purple-900/50">H</div>
              <div>
                <h3 className="font-bold text-white text-xl">HadeMC</h3>
                <span className="text-purple-400 text-sm font-semibold bg-purple-400/10 px-2 py-0.5 rounded-full">Ex-Moderador</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <span>⏱️</span><span>3 meses</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Ejercí como moderador del servidor. Decidí dejarlo por la inactividad del owner, que afectaba al desarrollo del servidor.</p>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-800 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-purple-900/50">L</div>
              <div>
                <h3 className="font-bold text-white text-xl">LeyendsRP</h3>
                <span className="text-pink-400 text-sm font-semibold bg-pink-400/10 px-2 py-0.5 rounded-full">Ex-Owner</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <span>👑</span><span>Proyecto propio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Fundé y gestioné mi propio servidor de Roleplay. Tuve que cerrarlo por limitaciones de presupuesto y falta de jugadores.</p>
          </div>

          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-800 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-purple-900/50">F</div>
              <div>
                <h3 className="font-bold text-white text-xl">FlameMC</h3>
                <span className="text-orange-400 text-sm font-semibold bg-orange-400/10 px-2 py-0.5 rounded-full">Ex-Head Admin</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <span>⏱️</span><span>Varios meses</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Ocupé el cargo de Head Admin del servidor. Lo dejé debido a la inactividad del owner, que impedía el crecimiento del proyecto.</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: GUÍAS */}
      <section id="guias" className="relative z-10 py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Conocimiento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Guías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tutoriales</span>
          </h2>
          <p className="text-gray-400 text-lg">Contenido que he creado para la comunidad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-dashed border-purple-900/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-bold text-white mb-2">Próximamente</h3>
            <p className="text-gray-500 text-sm">Aquí aparecerán tus guías y tutoriales cuando los publiques.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CONTACTO */}
      <section id="contacto" className="relative z-10 py-24 px-4 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
          <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Encuéntrame</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Contacto</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">¿Quieres hablar conmigo? Encuéntrame en mis redes</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://discord.com/users/ReyKamiS5" target="_blank" className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/25 flex items-center justify-center gap-3">
            <span className="text-xl">💬</span>
            <div className="text-left">
              <div className="text-xs opacity-70">Discord</div>
              <div>@ReyKamiS5</div>
            </div>
          </a>
          <a href="https://instagram.com/Justicianaranja2012" target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-3">
            <span className="text-xl">📸</span>
            <div className="text-left">
              <div className="text-xs opacity-70">Instagram</div>
              <div>@Justicianaranja2012</div>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-purple-900/20 py-8 text-center">
        <p className="text-gray-600 text-sm">© 2025 <span className="text-purple-400">ReyKamiS5</span> — Hecho con 💜 y Next.js</p>
      </footer>

    </main>
  )
}