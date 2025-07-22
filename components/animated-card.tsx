"use client"

import type React from "react"
import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade-scale" | "flip-x" | "flip-y" | "zoom-rotate" | "elastic"
  delay?: number
}

export function AnimatedCard({ children, className, animation = "fade-scale", delay = 0 }: AnimatedCardProps) {
  const { elementRef, isVisible } = useAnimationOnScroll({ threshold: 0.1 })

  const getAnimationClass = () => {
    if (!isVisible) return "animate-hidden"

    switch (animation) {
      case "slide-left":
        return "animate-slide-in-left"
      case "slide-right":
        return "animate-slide-in-right"
      case "slide-up":
        return "animate-slide-in-bottom"
      case "flip-x":
        return "animate-flip-in-x"
      case "flip-y":
        return "animate-flip-in-y"
      case "zoom-rotate":
        return "animate-zoom-in-rotate"
      case "elastic":
        return "animate-elastic-in"
      default:
        return "animate-fade-in-scale"
    }
  }

  const getDelayClass = () => {
    if (delay <= 0) return ""
    return `animate-delay-${Math.min(delay, 2000)}`
  }

  return (
    <Card
      ref={elementRef}
      className={cn("hover-lift", getAnimationClass(), getDelayClass(), className)}
      style={{ animationDelay: delay > 2000 ? `${delay}ms` : undefined }}
    >
      {children}
    </Card>
  )
} 