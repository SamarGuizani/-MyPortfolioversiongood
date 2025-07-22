import { Variants } from "framer-motion"

// Enhanced fade in with 3D effect
export const fadeIn3D: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 25,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
}

// Stagger container with perspective
export const staggerWithPerspective: Variants = {
  hidden: { 
    opacity: 0,
    perspective: 1000,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

// Hero text reveal with gradient
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -45,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 1.2,
    },
  },
}

// Card hover with depth
export const cardWithDepth: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    rotateX: 5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

// Button with glow effect
export const glowButton: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 0 10px rgba(56, 189, 248, 0.3)",
  },
}

// Skill badge with float
export const floatingBadge: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
  hover: {
    y: -5,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.3,
    },
  },
}

// Section header with 3D reveal
export const sectionHeader3D: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 30,
    perspective: 1000,
    transformStyle: "preserve-3d",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      duration: 1,
    },
  },
}

// List item with slide and fade
export const listItemSlide: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    y: 10,
    rotateY: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

// Image container with 3D hover
export const image3D: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
    perspective: 1000,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

// Social icon with bounce and glow
export const socialIconGlow: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    filter: "brightness(1.2) drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

// Page transition with depth
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(5px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    filter: "blur(5px)",
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1],
    },
  },
}

// Enhanced 3D text reveal
export const textReveal3D: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -80,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 1,
    },
  },
}

// Magnetic hover effect
export const magneticHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

// Smooth scroll reveal
export const smoothReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.8,
    },
  },
}

// Floating animation with subtle rotation
export const floatWithRotate: Variants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  animate: {
    y: [-10, 10],
    rotate: [-1, 1],
    transition: {
      y: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      rotate: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
}

// Professional card hover effect
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

// Staggered list items
export const staggeredList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// List item animation
export const listItem: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

// Gradient text animation
export const gradientText: Variants = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
}

// Button hover animation
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
}

// Scroll progress indicator
export const scrollProgress: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Section header reveal
export const sectionHeader: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

// Skill badge animation
export const skillBadge: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

// Image reveal animation
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

// Social icon animation
export const socialIcon: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.9,
    rotate: -15,
  },
}

// Decorative triangle animation
export const triangleRotate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
    y: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.8,
    },
  },
}

// Advanced parallax scroll effect
export const parallaxScroll: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: (custom = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.2,
    },
  }),
}

// Text reveal with character stagger
export const textRevealStagger: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      ease: "easeOut", // Fixed: Using standard easing function
    },
  },
}

// Character animation for text reveal
export const characterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

// Smooth scroll progress indicator
export const smoothProgress: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

// Enhanced 3D card effect
export const card3DEffect: Variants = {
  rest: { 
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
}

// Floating animation for background elements
export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
}

// Elastic bounce for interactive elements
export const elasticBounce: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
}

// Gradient wave animation
export const gradientWave: Variants = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
    },
  },
} 

// Morphing background animation
export const morphingBackground: Variants = {
  initial: {
    backgroundPosition: "0% 50%",
    filter: "hue-rotate(0deg)",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    filter: ["hue-rotate(0deg)", "hue-rotate(180deg)", "hue-rotate(360deg)"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
}

// Perspective hover effect
export const perspectiveHover: Variants = {
  rest: {
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
    boxShadow: "20px 20px 60px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
}

// Glitch text effect
export const glitchText: Variants = {
  initial: {
    textShadow: "0 0 0 rgba(0,0,0,0)",
    transform: "translateX(0)",
  },
  animate: {
    textShadow: [
      "2px 0 #ff0000, -2px 0 #00ff00",
      "-2px 0 #ff0000, 2px 0 #00ff00",
      "2px 0 #ff0000, -2px 0 #00ff00",
      "0 0 0 rgba(0,0,0,0)",
    ],
    transform: ["translateX(-2px)", "translateX(2px)", "translateX(-2px)", "translateX(0)"],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
}

// Liquid fill effect
export const liquidFill: Variants = {
  initial: {
    backgroundSize: "100% 0%",
  },
  hover: {
    backgroundSize: "100% 100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

// Particle explosion effect
export const particleExplosion: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

// Neon glow effect
export const neonGlow: Variants = {
  initial: {
    textShadow: "0 0 0 rgba(255,255,255,0)",
    color: "rgba(255,255,255,0.8)",
  },
  animate: {
    textShadow: [
      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff",
      "0 0 2px #fff, 0 0 5px #fff, 0 0 7px #0ff, 0 0 10px #0ff",
      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff",
    ],
    color: [
      "rgba(255,255,255,1)",
      "rgba(255,255,255,0.8)",
      "rgba(255,255,255,1)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// 3D flip card effect
export const flipCard: Variants = {
  rest: {
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    rotateY: 180,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

// Ripple effect
export const rippleEffect: Variants = {
  rest: {
    scale: 1,
    opacity: 0.8,
  },
  hover: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
}

// Typewriter effect
export const typewriter: Variants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

// Spotlight hover effect
export const spotlightHover: Variants = {
  rest: {
    backgroundPosition: "50% 50%",
    backgroundSize: "0% 0%",
  },
  hover: {
    backgroundPosition: "50% 50%",
    backgroundSize: "200% 200%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Magnetic pull effect
export const magneticPull: Variants = {
  rest: { x: 0, y: 0 },
  hover: (mousePosition: { x: number; y: number }) => ({
    x: mousePosition.x * 0.2,
    y: mousePosition.y * 0.2,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    },
  }),
}

// Shimmering border effect
export const shimmeringBorder: Variants = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
}

// Floating elements with parallax
export const floatingParallax: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-20, 20],
    rotate: [-5, 5],
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      rotate: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
} 