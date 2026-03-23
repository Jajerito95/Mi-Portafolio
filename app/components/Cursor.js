"use client"
import { useEffect } from "react"

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")
    if (!cursor) return
    
    let x = 0, y = 0
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      cursor.style.opacity = "1"
    }

    const render = () => {
      cursor.style.left = x + "px"
      cursor.style.top = y + "px"
      raf = requestAnimationFrame(render)
    }

    const addHover = (e) => {
      const target = e.target.closest("a, button")
      if (target) {
        cursor.classList.add("hover")
        if (target.textContent.trim() === "✕" || target.title === "cerrar") {
          cursor.classList.add("danger")
        }
      }
    }

    const removeHover = (e) => {
      if (e.target.closest("a, button")) {
        cursor.classList.remove("hover")
        cursor.classList.remove("danger")
      }
    }

    window.addEventListener("mousemove", move, { capture: true })
    window.addEventListener("mouseover", addHover, { capture: true })
    window.addEventListener("mouseout", removeHover, { capture: true })
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", move, { capture: true })
      window.removeEventListener("mouseover", addHover, { capture: true })
      window.removeEventListener("mouseout", removeHover, { capture: true })
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div id="cursor"></div>
}