import { ReactNode, forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type GlassPanelVariant = 'default' | 'elevated' | 'strong';

interface GlassPanelProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: GlassPanelVariant;
  hover?: boolean;
  ambient?: boolean;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(({
  children,
  className,
  variant = 'default',
  hover = true,
  ambient = false,
  ...motionProps
}, ref) => {
  const variantStyles = {
    default: 'glass-panel',
    elevated: 'glass-panel-elevated',
    strong: 'glass-panel-strong'
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        variantStyles[variant],
        hover && 'hover:scale-[1.02] hover:-translate-y-1',
        ambient && 'ambient-glow',
        'transition-all duration-500 ease-out',
        className
      )}
      whileHover={hover ? { 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
      } : undefined}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };