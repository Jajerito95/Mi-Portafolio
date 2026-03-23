"use client"
import Navbar from "./components/Navbar"
import { motion } from "framer-motion"
import MusicPlayer from "./components/MusicPlayer"
import Cursor from "./components/Cursor"
import Image from "next/image"
import Intro from "./components/Intro"
import { useState, useEffect } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.2, ease: "easeIn" } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const roles = ["Staff", "Gamer", "Developer", "Moderador", "Creador"]

export default function Home() {
  const [introCompleta, setIntroCompleta] = useState(false)
  const [rolActual, setRolActual] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRolActual((prev) => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
     <Navbar />
     {!introCompleta && <Intro onComplete={() => setIntroCompleta(true)} />}
     <Cursor />

      {/* Fondo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0533_0%,_#0a0a0f_60%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YXIiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuOCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMSIgZmlsbD0idXJsKCNzdGFyKSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjE1MCIgcj0iMC41IiBmaWxsPSJ1cmwoI3N0YXIpIi8+PGNpcmNsZSBjeD0iNzAiIGN5PSIxNzAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxNDAiIHI9IjAuNSIgZmlsbD0idXJsKCNzdGFyKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* SECCIÓN 1: HERO */}
      <section id="inicio" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">

          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Bienvenido a mi portafolio</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Rey</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kami</span>
            <span className="text-white drop-shadow-lg">S5</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="relative mb-6 w-32 h-32 mx-auto">
            <div className="w-32 h-32 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-xl shadow-purple-900/50">
              <Image src="/avatar.jpg" alt="ReyKamiS5" width={128} height={128} className="w-full h-full object-cover"/>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
          </motion.div>

          <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></motion.div>
          
          <motion.div variants={fadeUp} className="mb-4 h-8 flex items-center justify-center">
  <span className={`text-xl font-bold transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
      {roles[rolActual]}
    </span>
  </span>
</motion.div>

          <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Joven apasionado por la tecnología y la comunidad gamer. 
            Empecé en el mundo del staff para combatir el problema de los 
            hackers que arruinaban la experiencia en servidores de Minecraft. 
            Me gusta descubrir cosas nuevas y aprender constantemente.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a href="#discord" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Ver mi experiencia →
            </a>
            <a href="#guias" className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/50 hover:border-pink-400/70 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:from-purple-500/20 hover:to-pink-500/20">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Guías</span>
            </a>
            <a href="#contacto" className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Contacto
            </a>
          </motion.div>

        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-purple-400 opacity-60">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <motion.section id="sobre-mi" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={stagger} className="relative z-10 py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Conóceme</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">mí</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger} className="space-y-6">
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed text-lg">
              Hola, soy <span className="text-purple-400 font-semibold">ReyKamiS5</span>, un joven de
              <span className="text-purple-400 font-semibold"> España</span> apasionado por la tecnología
              y el mundo gamer. Mi nombre viene de <span className="text-purple-400 font-semibold">Kamisama
              de Dragon Ball</span> — porque me creía el rey — y el S5 porque me gustó cómo quedaba visualmente.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed text-lg">
              Todo empezó jugando a <span className="text-purple-400 font-semibold">Minecraft</span> — había
              muchos hackers en los servidores y decidí que quería hacer algo al respecto. Así fue como entré
              al mundo del staff y la moderación de comunidades.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed text-lg">
              Ahora me interesa también la <span className="text-purple-400 font-semibold">programación y la
              tecnología</span>, siempre buscando aprender cosas nuevas y crecer como persona.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-4">
            <motion.h3 variants={fadeUp} className="text-white font-bold text-xl mb-6">Mis intereses</motion.h3>
            {[
              { emoji: "⛏️", titulo: "Minecraft", desc: "Donde todo comenzó" },
              { emoji: "💻", titulo: "Tecnología y programación", desc: "Aprendiendo constantemente" },
              { emoji: "🎮", titulo: "Gaming en general", desc: "Siempre explorando nuevos juegos" },
              { emoji: "🛡️", titulo: "Moderación y comunidades", desc: "Construyendo espacios sanos" },
            ].map((item) => (
              <motion.div key={item.titulo} variants={fadeUp} className="flex items-center gap-4 bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:-translate-x-1">
                <div className="text-2xl">{item.emoji}</div>
                <div>
                  <div className="text-white font-semibold">{item.titulo}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ESTADÍSTICAS */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={stagger} className="relative z-10 py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { numero: "4", label: "Servidores" },
            { numero: "8+", label: "Meses de experiencia" },
            { numero: "1", label: "Servidor propio fundado" },
            { numero: "∞", label: "Ganas de aprender" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">{stat.numero}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* STAFF */}
      <motion.section id="discord" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={stagger} className="relative z-10 py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Trayectoria</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Experiencia como <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Staff</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">Servidores donde formé parte del equipo de moderación</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { letra: "S", nombre: "StarryMC", rol: "Ex-Helper", color: "from-purple-600 to-purple-800", rolColor: "text-purple-400 bg-purple-400/10", tiempo: "2 meses", progreso: 20, desc: "Formé parte del equipo de ayuda al jugador. Salí del servidor tras una acusación injusta de staff abuse.", logro: "Primera experiencia como staff" },
            { letra: "H", nombre: "HadeMC", rol: "Ex-Moderador", color: "from-purple-600 to-purple-800", rolColor: "text-purple-400 bg-purple-400/10", tiempo: "3 meses", progreso: 30, desc: "Ejercí como moderador del servidor. Decidí dejarlo por la inactividad del owner, que afectaba al desarrollo del servidor.", logro: "Gestioné conflictos entre jugadores" },
            { letra: "L", nombre: "LeyendsRP", rol: "Ex-Owner", color: "from-pink-600 to-purple-800", rolColor: "text-pink-400 bg-pink-400/10", tiempo: "Proyecto propio", progreso: 100, desc: "Fundé y gestioné mi propio servidor de Roleplay. Tuve que cerrarlo por limitaciones de presupuesto y falta de jugadores.", logro: "Fundé y gestioné mi propio servidor" },
            { letra: "F", nombre: "FlameMC", rol: "Ex-Head Admin", color: "from-orange-500 to-purple-800", rolColor: "text-orange-400 bg-orange-400/10", tiempo: "Varios meses", progreso: 60, desc: "Ocupé el cargo de Head Admin del servidor. Lo dejé debido a la inactividad del owner, que impedía el crecimiento del proyecto.", logro: "Lideré el equipo de moderación" },
          ].map((server) => (
            <motion.div key={server.nombre} variants={fadeUp} className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-purple-900/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
              
              {/* Cabecera */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${server.color} rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-purple-900/50`}>{server.letra}</div>
                <div>
                  <h3 className="font-bold text-white text-xl">{server.nombre}</h3>
                  <span className={`${server.rolColor} text-sm font-semibold px-2 py-0.5 rounded-full`}>{server.rol}</span>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-gray-500 text-xs">Duración</div>
                  <div className="text-purple-300 text-sm font-semibold">{server.tiempo}</div>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{server.desc}</p>

              {/* Logro */}
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg px-3 py-2 mb-4">
                <span className="text-purple-400 text-xs">⭐ {server.logro}</span>
              </div>

              {/* Barra de progreso */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Tiempo en el servidor</span>
                  <span className="text-purple-400">{server.progreso}%</span>
                </div>
                <div className="w-full bg-purple-900/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${server.progreso}%` }}
                  ></div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.section>

      {/* GUÍAS */}

      {/* GUÍAS */}
      <motion.section id="guias" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={stagger} className="relative z-10 py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Conocimiento</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Guías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tutoriales</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">Contenido que he creado para la comunidad</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#12121a] to-[#0f0f17] border border-dashed border-purple-900/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-bold text-white mb-2">Próximamente</h3>
            <p className="text-gray-500 text-sm">Aquí pondre mis guías y tutoriales cuando las publiques.
              Las publicare pronto.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section id="contacto" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={stagger} className="relative z-10 py-24 px-4">
        
        {/* Fondo llamativo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2d1b69_0%,_transparent_70%)] opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="text-purple-300 text-sm tracking-widest uppercase font-medium">Encuéntrame</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black mb-6">
            Hablemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">👋</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-300 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            ¿Quieres contactarme, hablar de algún proyecto o simplemente saludar? Encuéntrame en mis redes.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <motion.a variants={fadeUp} href="https://discord.com/users/ReyKamiS5" target="_blank"
              className="group bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#5865F2]/30 flex items-center gap-4">
              <span className="text-3xl">💬</span>
              <div className="text-left">
                <div className="text-xs opacity-70 mb-0.5">Discord</div>
                <div className="font-bold">@ReyKamiS5</div>
              </div>
            </motion.a>

            <motion.a variants={fadeUp} href="https://instagram.com/Justicianaranja2012" target="_blank"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30 flex items-center gap-4">
              <span className="text-3xl">📸</span>
              <div className="text-left">
                <div className="text-xs opacity-70 mb-0.5">Instagram</div>
                <div className="font-bold text-sm">@Justicianaranja2012</div>
              </div>
            </motion.a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-600 text-sm mt-12">
            Normalmente respondo en menos de 24 horas 🕐
          </motion.p>
        </div>

      </motion.section>
      <MusicPlayer />

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-purple-900/20 py-8 text-center">
        <p className="text-gray-600 text-sm">© 2025 <span className="text-purple-400">ReyKamiS5</span> — Hecho con 💜 y Next.js</p>
      </footer>

    </main>
  )
}