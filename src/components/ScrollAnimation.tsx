import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
}

const ScrollAnimation = ({ 
  children, 
  className = "", 
  direction = 'up', 
  delay = 0,
  duration = 0.4 // Reduzido para animações mais rápidas
}: ScrollAnimationProps) => {
  
  // Memoizar variants para evitar recriação em cada render
  const variants = useMemo(() => {
    // Valores de deslocamento reduzidos para animações mais suaves
    const offset = 30; // Reduzido de 50 para 30
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: offset, willChange: 'transform, opacity' },
          visible: { opacity: 1, y: 0, willChange: 'auto' }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -offset, willChange: 'transform, opacity' },
          visible: { opacity: 1, y: 0, willChange: 'auto' }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: offset, willChange: 'transform, opacity' },
          visible: { opacity: 1, x: 0, willChange: 'auto' }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -offset, willChange: 'transform, opacity' },
          visible: { opacity: 1, x: 0, willChange: 'auto' }
        };
      case 'none':
      default:
        return {
          hidden: { opacity: 0, willChange: 'opacity' },
          visible: { opacity: 1, willChange: 'auto' }
        };
    }
  }, [direction]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, // Importante: anima apenas uma vez
        amount: 0.1, // Trigger com apenas 10% visível (mais cedo, menos redraws)
        margin: "-100px" // Pré-carrega antes de entrar na viewport
      }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // Curva de easing otimizada
      }}
      variants={variants}
      className={className}
      style={{ 
        transform: 'translateZ(0)', // Força layer de composição
        willChange: 'transform, opacity' 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
