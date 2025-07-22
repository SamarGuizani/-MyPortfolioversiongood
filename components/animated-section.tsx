import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ReactNode, useRef, useEffect } from "react"
import {
  triangleRotate,
  gradientText,
  sectionHeader3D,
  scrollProgress,
  parallaxScroll,
  textRevealStagger,
  characterAnimation,
  smoothProgress,
  floatingAnimation,
  gradientWave
} from "@/lib/animations"

interface AnimatedSectionProps {
  id: string
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  className?: string
  decorationColor?: string
}

export function AnimatedSection({
  id,
  title,
  subtitle,
  description,
  children,
  className = "",
  decorationColor = "teal",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring animations
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  })
  
  const smoothScale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]), {
    stiffness: 200,
    damping: 30,
  })

  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 100,
    damping: 30,
  })

  // Handle mouse movement for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = sectionRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }
      const x = e.clientX - left
      const y = e.clientY - top
      mouseX.set(x - width / 2)
      mouseY.set(y - height / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Split title into characters for stagger animation
  const titleChars = title.split("")

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`py-20 px-4 relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        y: smoothY,
        scale: smoothScale,
        opacity: smoothOpacity,
      }}
      variants={parallaxScroll}
    >
      {/* Enhanced progress indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
        variants={smoothProgress}
      />

      <div className="container mx-auto">
        <div className="text-center mb-12 relative">
          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-5 blur-xl"
            variants={gradientWave}
            initial="initial"
            animate="animate"
          />

          <motion.div 
            className="inline-block relative" 
            variants={triangleRotate}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-${decorationColor}-400 mx-auto mb-4`}
            />
            <motion.div
              className="absolute inset-0 blur-lg opacity-50"
              style={{
                background: `radial-gradient(circle, var(--${decorationColor}-500) 0%, transparent 70%)`,
              }}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div variants={sectionHeader3D} className="perspective-1000">
            <motion.div variants={textRevealStagger} className="overflow-hidden">
              <motion.h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${decorationColor}-400 to-purple-500 bg-clip-text text-transparent relative z-10 inline-flex flex-wrap justify-center gap-[0.2em]`}>
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={characterAnimation}
                    className="inline-block"
                    style={{
                      display: char === " " ? "inline" : "inline-block",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>

            {subtitle && (
              <motion.h3
                className="text-xl text-gray-300 mt-4"
                variants={textRevealStagger}
                custom={1}
              >
                {subtitle}
              </motion.h3>
            )}

            {description && (
              <motion.p
                className="text-gray-400 mt-4 max-w-2xl mx-auto"
                variants={textRevealStagger}
                custom={2}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto relative"
          variants={sectionHeader3D}
          style={{
            perspective: 1000,
            translateX: useTransform(mouseX, [-400, 400], [-10, 10]),
            translateY: useTransform(mouseY, [-300, 300], [-5, 5]),
            rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
            rotateY: useTransform(mouseX, [-400, 400], [-5, 5]),
          }}
        >
          {/* Enhanced content glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent opacity-5 blur-2xl"
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {children}
        </motion.div>
      </div>
    </motion.section>
  )
} 