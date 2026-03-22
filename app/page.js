import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* SECCIÓN 1: HERO - Presentación personal */}
      <section id="inicio" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="animate-pulse mb-4 text-purple-400 text-sm tracking-widest uppercase">
          Bienvenido a mi portafolio
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
          <span className="text-white">Rey</span>
          <span className="text-purple-400">Kami</span>
          <span className="text-white">S5</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
          Joven apasionado por la tecnología y la comunidad gamer. 
          Empecé en el mundo del staff para combatir el problema de los 
          hackers que arruinaban la experiencia en servidores de Minecraft. 
          Me gusta descubrir cosas nuevas y aprender constantemente.
        </p>
        <div className="flex gap-4">
          <a href="#discord" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Ver mi experiencia
          </a>
          <a href="#contacto" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Contacto
          </a>
        </div>
      </section>

      {/* SECCIÓN 2: DISCORD STAFF */}
      <section id="discord" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experiencia como <span className="text-purple-400">Staff</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Servidores donde formé parte del equipo de moderación</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* StarryMC */}
          <div className="bg-[#12121a] border border-purple-900 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">S</div>
              <div>
                <h3 className="font-bold text-white text-lg">StarryMC</h3>
                <span className="text-purple-400 text-sm font-semibold">Ex-Helper</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">⏱️ Duración: 2 meses</p>
            <p className="text-gray-500 text-sm">Formé parte del equipo de ayuda al jugador. Salí del servidor tras una acusación injusta de staff abuse.</p>
          </div>

          {/* HadeMC */}
          <div className="bg-[#12121a] border border-purple-900 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">H</div>
              <div>
                <h3 className="font-bold text-white text-lg">HadeMC</h3>
                <span className="text-purple-400 text-sm font-semibold">Ex-Moderador</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">⏱️ Duración: 3 meses</p>
            <p className="text-gray-500 text-sm">Ejercí como moderador del servidor. Decidí dejarlo por la inactividad del owner, que afectaba al desarrollo del servidor.</p>
          </div>

          {/* LeyendsRP */}
          <div className="bg-[#12121a] border border-purple-900 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">L</div>
              <div>
                <h3 className="font-bold text-white text-lg">LeyendsRP</h3>
                <span className="text-purple-400 text-sm font-semibold">Ex-Owner</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">⏱️ Proyecto propio</p>
            <p className="text-gray-500 text-sm">Fundé y gestioné mi propio servidor de Roleplay. Tuve que cerrarlo por limitaciones de presupuesto y falta de jugadores.</p>
          </div>

          {/* FlameMC */}
          <div className="bg-[#12121a] border border-purple-900 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">F</div>
              <div>
                <h3 className="font-bold text-white text-lg">FlameMC</h3>
                <span className="text-purple-400 text-sm font-semibold">Ex-Head Admin</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">⏱️ Duración: varios meses</p>
            <p className="text-gray-500 text-sm">Ocupé el cargo de Head Admin del servidor. Lo dejé debido a la inactividad del owner, que impedía el crecimiento del proyecto.</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: GUÍAS */}
      <section id="guias" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Guías y <span className="text-purple-400">Tutoriales</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Contenido que he creado para la comunidad</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#12121a] border border-purple-900 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="text-purple-400 text-3xl mb-4">📋</div>
            <h3 className="font-bold text-white mb-2">Próximamente</h3>
            <p className="text-gray-500 text-sm">Aquí aparecerán tus guías y tutoriales cuando los publiques.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CONTACTO */}
      <section id="contacto" className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-purple-400">Contacto</span>
        </h2>
        <p className="text-gray-400 mb-12">¿Quieres hablar conmigo? Encuéntrame en mis redes</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://discord.com/users/ReyKamiS5" target="_blank" className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            💬 Discord — @ReyKamiS5
          </a>
          <a href="https://instagram.com/Justicianaranja2012" target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            📸 Instagram — @Justicianaranja2012
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 py-8 text-center text-gray-600 text-sm">
        <p>© 2025 ReyKamiS5 — Hecho con 💜 y Next.js</p>
      </footer>

    </main>
  )
}