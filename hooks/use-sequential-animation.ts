"use client"

import { useCallback, useState } from "react"

export function useSequentialAnimation(totalSteps: number, delayBetweenSteps = 300) {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentStep(-1)

    // Start the sequence
    for (let i = 0; i < totalSteps; i++) {
      setTimeout(() => {
        setCurrentStep(i)
        if (i === totalSteps - 1) {
          setIsAnimating(false)
        }
      }, i * delayBetweenSteps)
    }
  }, [totalSteps, delayBetweenSteps, isAnimating])

  const isStepVisible = useCallback(
    (step: number) => {
      return currentStep >= step
    },
    [currentStep],
  )

  return {
    currentStep,
    startAnimation,
    isStepVisible,
    isAnimating,
  }
} 