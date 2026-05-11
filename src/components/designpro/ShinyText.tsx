import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Texto con brillo animado: gradiente 100° que recorre de izquierda a derecha en bucle (3s).
 * Colores base #64CEFB y highlight #ffffff.
 */
export function ShinyText({ children, className = '' }: Props) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(100deg, #64CEFB 0%, #64CEFB 32%, #ffffff 50%, #64CEFB 68%, #64CEFB 100%)',
        backgroundSize: '220% 100%',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
      initial={{ backgroundPositionX: '0%' }}
      animate={{ backgroundPositionX: ['0%', '100%'] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
}
