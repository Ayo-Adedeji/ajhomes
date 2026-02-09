// Animation configurations and presets
export const animations = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  
  // Slide animations
  slideInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  
  slideInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
};

// Transition configurations
export const transitions = {
  smooth: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  bouncy: {
    duration: 0.8,
    ease: [0.68, -0.55, 0.265, 1.55],
  },
  
  quick: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  slow: {
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Stagger configurations
export const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};