export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a href="#inicio" className="text-xl font-bold">
          <span className="text-white">Rey</span>
          <span className="text-purple-400">Kami</span>
          <span className="text-white">S5</span>
        </a>

        {/* Links de navegación */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#inicio" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Inicio
          </a>
          <a href="#discord" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Staff
          </a>
          <a href="#guias" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Guías
          </a>
          <a href="#contacto" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Contacto
          </a>
        </div>

      </div>
    </nav>
  )
}