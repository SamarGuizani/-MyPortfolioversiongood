"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AnimatedRobot() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer orbital rings */}
      <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-4 border border-teal-500/15 rounded-full animate-spin-reverse"></div>
      <div className="absolute inset-8 border border-blue-500/10 rounded-full animate-spin-slow"></div>

      {/* Floating orbital elements */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-orbit-1 shadow-lg shadow-yellow-400/50"></div>
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-orbit-2 shadow-lg shadow-green-400/50"></div>
      <div className="absolute bottom-12 left-12 w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-orbit-3 shadow-lg shadow-purple-400/50"></div>
      <div className="absolute top-16 right-16 w-3 h-3 bg-gradient-to-br from-red-400 to-rose-500 rounded-full animate-orbit-4 shadow-lg shadow-red-400/50"></div>
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-orbit-5 shadow-lg shadow-blue-400/50"></div>
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full animate-orbit-6 shadow-lg shadow-teal-400/50"></div>

      {/* Central robot container with enhanced glow */}
      <div className="relative w-48 h-48 md:w-56 md:h-56">
        {/* Multi-layer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-teal-500/20 animate-pulse blur-3xl scale-125"></div>
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/25 animate-pulse blur-2xl scale-110"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Robot container with 3D rotation */}
        <div className="relative w-full h-full animate-float transform-gpu">
          <div className="relative w-full h-full animate-robot-turn-3d transform-gpu preserve-3d">
            {/* Robot Image */}
            <div className="relative w-full h-full transform-gpu rounded-full overflow-hidden border-4 border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-500/10 rounded-full animate-pulse"></div>

              <Image
                src="/images/portfoliorobot.png"
                alt="AI Robot Assistant"
                fill
                className="object-contain drop-shadow-2xl filter brightness-110 contrast-110 transform-gpu"
                priority
              />

              {/* Enhanced glowing eyes effect */}
              <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="relative">
                  <div className="w-8 h-10 bg-cyan-400/80 rounded-full animate-eye-glow blur-sm"></div>
                  <div className="absolute inset-0 w-8 h-10 bg-cyan-300/60 rounded-full animate-eye-sparkle"></div>
                  <div
                    className="absolute inset-1 w-6 h-8 bg-white/40 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>
                <div className="relative">
                  <div className="w-8 h-10 bg-cyan-400/80 rounded-full animate-eye-glow blur-sm"></div>
                  <div className="absolute inset-0 w-8 h-10 bg-cyan-300/60 rounded-full animate-eye-sparkle"></div>
                  <div
                    className="absolute inset-1 w-6 h-8 bg-white/40 rounded-full animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>

              {/* Professional lighting effects */}
              <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-cyan-400/15 to-transparent rounded-full blur-lg"></div>
            </div>

            {/* Holographic Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/8 to-transparent animate-hologram rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-teal-500/6 to-transparent animate-hologram-reverse rounded-full"></div>

            {/* Scanning Effects */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-scan-line shadow-lg shadow-cyan-400/30"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent animate-scan-line-reverse shadow-lg shadow-teal-500/30"></div>
            </div>
          </div>
        </div>

        {/* Pulsing energy rings */}
        <div
          className="absolute -inset-2 border-2 border-cyan-400/20 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute -inset-4 border border-teal-500/15 rounded-full animate-ping"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}
