"use client"

import { useEffect, useRef, useState } from "react"

interface UseAnimationOnScrollOptions {
  threshold?: number
  rootMargin?: string
}

export function useAnimationOnScroll(options: UseAnimationOnScrollOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px" } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin])

  return { elementRef, isVisible }
} 