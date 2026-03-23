"use client"
import { useState, useEffect } from "react"

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const check = setInterval(() => {
      if (window.__musicPlayer && !window.__musicPlayer.paused) {
        setPlaying(true)
        clearInterval(check)
      }
    }, 100)
    return () => clearInterval(check)
  }, [])

  const toggleMusic = () => {
    if (!window.__musicPlayer) {
      window.__musicPlayer = new Audio("/musica.mp3")
      window.__musicPlayer.loop = true
      window.__musicPlayer.volume = 0.3
    }
    if (playing) {
      window.__musicPlayer.pause()
      setPlaying(false)
    } else {
      window.__musicPlayer.play()
      setPlaying(true)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#12121a] border border-purple-900/50 hover:border-purple-500/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/30 group"
      title={playing ? "Pausar música" : "Reproducir música"}
    >
      {playing ? (
        <span className="text-purple-400 text-lg">🔊</span>
      ) : (
        <span className="text-gray-500 group-hover:text-purple-400 text-lg transition-colors duration-200">🔇</span>
      )}
      {playing && (
        <span className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping"></span>
      )}
    </button>
  )
}