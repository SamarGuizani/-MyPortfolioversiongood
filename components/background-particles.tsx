"use client"

import { useEffect, useState } from "react"

export function BackgroundParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([])

  useEffect(() => {
    const colors = ["teal-400", "blue-500", "purple-500", "blue-600"]
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 bg-${particle.color}/20 rounded-full animate-particle-float shadow-sm`}
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Additional floating elements with palette colors */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/15 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/20 rounded-full animate-ping"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500/15 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/6 right-1/3 w-1 h-1 bg-teal-500/25 rounded-full animate-ping"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
