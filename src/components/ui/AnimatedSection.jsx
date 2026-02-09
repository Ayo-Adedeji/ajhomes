import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { animations, transitions } from '../../utils/animations';

const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.6,
  className = '',
  threshold = 0.1,
  once = true,
  ...props 
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;

  return (
    <motion.div
      ref={ref}
      initial={animations[animation]?.initial || animations.fadeInUp.initial}
      animate={shouldAnimate ? (animations[animation]?.animate || animations.fadeInUp.animate) : animations[animation]?.initial || animations.fadeInUp.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;