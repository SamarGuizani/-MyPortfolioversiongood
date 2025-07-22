"use client"

import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { cn } from "@/lib/utils"

interface AnimatedSectionTitleProps {
  title: string
  subtitle?: string
  color?: "teal" | "blue" | "purple"
  gradientFrom?: string
  gradientTo?: string
  triangleColor?: string
  className?: string
}

export function AnimatedSectionTitle({
  title,
  subtitle,
  color = "teal",
  gradientFrom,
  gradientTo,
  triangleColor,
  className,
}: AnimatedSectionTitleProps) {
  const { elementRef, isVisible } = useAnimationOnScroll({ threshold: 0.1 })

  const getColorClasses = () => {
    if (gradientFrom && gradientTo && triangleColor) {
      return {
        triangle: `border-b-${triangleColor}`,
        title: `from-${gradientFrom} to-${gradientTo}`,
      }
    }

    switch (color) {
      case "blue":
        return {
          triangle: "border-b-blue-400",
          title: "from-blue-400 to-teal-500",
        }
      case "purple":
        return {
          triangle: "border-b-purple-400",
          title: "from-purple-400 to-teal-500",
        }
      default:
        return {
          triangle: "border-b-teal-400",
          title: "from-teal-400 to-purple-500",
        }
    }
  }

  const colors = getColorClasses()

  return (
    <div ref={elementRef} className="text-center mb-12">
      <div className="inline-block">
        <div
          className={cn(
            "w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] mx-auto mb-4",
            colors.triangle,
            isVisible ? "animate-fade-in-scale animate-delay-100" : "opacity-0 scale-50",
          )}
        ></div>
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
            `bg-gradient-to-r ${colors.title}`,
            isVisible ? "animate-slide-in-bottom animate-delay-300" : "opacity-0 translate-y-8",
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-lg text-gray-400 mt-2",
              isVisible ? "animate-fade-in-scale animate-delay-500" : "opacity-0 scale-90",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
} 