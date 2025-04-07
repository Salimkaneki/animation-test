"use client"

import { motion, useMotionValue } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Pointer() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 10)
      y.set(e.clientY - 10)
    }

    window.addEventListener("pointermove", move)

    return () => window.removeEventListener("pointermove", move)
  }, [x, y])

  return <motion.div style={{ ...circle, x, y }} />
}


const circle = {
  width: 20,
  height: 20,
  backgroundColor: "#000",
  borderRadius: "50%",
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 9999,
}

