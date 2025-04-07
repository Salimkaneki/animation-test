"use client"

import { useEffect, useRef } from "react"
import { frame, motion, useSpring } from "framer-motion"

export default function FollowPointer() {
  const ref = useRef<HTMLDivElement>(null)
  const springConfig = { damping: 10, stiffness: 100, restDelta: 0.001 }

  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const element = ref.current
      if (!element) return

      frame.read(() => {
        const bounds = element.getBoundingClientRect()
        const offsetX = clientX - bounds.left - bounds.width / 2
        const offsetY = clientY - bounds.top - bounds.height / 2

        x.set(offsetX)
        y.set(offsetY)
      })
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <motion.div
        ref={ref}
        style={{ x, y }}
        className="w-24 h-24 bg-blue-500 rounded-full absolute"
      />
    </div>
  )
}
