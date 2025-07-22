"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useSequentialAnimation } from "@/hooks/use-sequential-animation"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, MessageSquare } from "lucide-react"
import Link from "next/link"
import { CVDownload } from "@/components/cv-download"

interface SequentialHeroAnimationProps {
  name: string
  title: string
  description: string
  buttons: React.ReactNode
  socialLinks: React.ReactNode
}

export function SequentialHeroAnimation({
  name,
  title,
  description,
  buttons,
  socialLinks,
}: SequentialHeroAnimationProps) {
  const [hasStarted, setHasStarted] = useState(false)
  const { currentStep, startAnimation, isStepVisible } = useSequentialAnimation(6, 400)

  useEffect(() => {
    // Auto-start animation when component mounts
    const timer = setTimeout(() => {
      setHasStarted(true)
      startAnimation()
    }, 500)

    return () => clearTimeout(timer)
  }, [startAnimation])

  const restartAnimation = () => {
    setHasStarted(true)
    startAnimation()
  }

  return (
    <div className="text-center lg:text-left space-y-8">
      {/* Step 1: Name with gradient effect */}
      <div className="space-y-4">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isStepVisible(0) ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-20 scale-95",
          )}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
            {name}
          </h1>
        </div>

        {/* Step 2: Title/Competence - NO BLUR */}
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isStepVisible(1) ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95",
          )}
        >
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              {title}
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-lg animate-pulse-glow -z-10"></div>
          </div>
        </div>

        {/* Step 3: Description - CLEAR AND READABLE */}
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isStepVisible(2) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95",
          )}
        >
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Step 4: Action Buttons */}
      <div
        className={cn(
          "flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 ease-out",
          isStepVisible(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        {buttons}
      </div>

      {/* Step 5: Social Links */}
      <div
        className={cn(
          "flex gap-4 justify-center lg:justify-start transition-all duration-1000 ease-out",
          isStepVisible(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        {socialLinks}
      </div>

      {/* Step 6: Restart Animation Button */}
      <div
        className={cn(
          "transition-all duration-1000 ease-out",
          isStepVisible(5) ? "opacity-100 scale-100" : "opacity-0 scale-75",
        )}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={restartAnimation}
          className="text-gray-500 hover:text-gray-300 text-xs animate-delay-600"
        >
          ↻ Replay Animation
        </Button>
      </div>
    </div>
  )
} 