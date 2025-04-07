"use client"
 
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Style pour le wrapper qui centrera le composant
const wrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
}

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
}
 
const box: React.CSSProperties = {
    width: 100,
    height: 100,
    backgroundColor: "#FF5449",
    borderRadius: "10px",
}
 
const button: React.CSSProperties = {
    backgroundColor: "#FF5449",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#000000",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
}
 
export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(true)
 
    return (
        <div style={wrapper}>
            <div style={container}>
                <AnimatePresence initial={false}>
                  {isVisible ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0}}
                      animate={{ opacity: 1, scale: 1}}
                      exit={{ opacity: 0, scale: 0 }}
                      style={box}
                      key="box"
                    />
                  ) : null }
                </AnimatePresence>
                <button style={button} onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    )
}