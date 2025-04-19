
import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AcrylicCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  hoverEffect?: boolean;
  clickEffect?: boolean;
}

export function AcrylicCard({
  children,
  className,
  intensity = 'medium',
  hoverEffect = true,
  clickEffect = false,
  ...motionProps
}: AcrylicCardProps) {
  const intensityStyles = {
    light: 'bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10',
    medium: 'bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/10',
    heavy: 'bg-white/15 dark:bg-black/30 backdrop-blur-xl border border-white/20'
  };

  return (
    <motion.div
      className={cn(
        'rounded-xl shadow-lg overflow-hidden',
        intensityStyles[intensity],
        hoverEffect && 'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10',
        clickEffect && 'active:scale-95',
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
