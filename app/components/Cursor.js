"use client"
import { useEffect } from "react"

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")
    let x = 0, y = 0
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const render = () => {
      cursor.style.left = x + "px"
      cursor.style.top = y + "px"
      raf = requestAnimationFrame(render)
    }

    const addHover = () => cursor.classList.add("hover")
    const removeHover = () => cursor.classList.remove("hover")

    window.addEventListener("mousemove", move)
    raf = requestAnimationFrame(render)

    const elementos = document.querySelectorAll("a, button")
    elementos.forEach((el) => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div id="cursor"></div>
}