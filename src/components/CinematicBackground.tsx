import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicBackgroundProps {
  videoUrl?: string;
  fallbackImage?: string;
  overlay?: boolean;
  parallax?: boolean;
}

const CinematicBackground = ({ 
  videoUrl = "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
  fallbackImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42d?w=1920&h=1080&fit=crop&q=80",
  overlay = true,
  parallax = true
}: CinematicBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {
        setUseVideo(false);
      });
    };

    const handleError = () => {
      setUseVideo(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Set playback properties
    video.playbackRate = 0.75;
    video.muted = true;
    video.loop = true;

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden">
      {/* Video Background */}
      <AnimatePresence>
        {useVideo && (
          <motion.video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: isVideoLoaded ? 0.15 : 0,
              scale: 1,
              filter: 'blur(3px) contrast(1.1) brightness(0.8)'
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>

      {/* Fallback Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fallbackImage})` }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: useVideo && isVideoLoaded ? 0 : 0.2,
          filter: 'blur(2px) contrast(1.1) brightness(0.7)'
        }}
        transition={{ duration: 1.5 }}
      />

      {/* Gradient Overlays */}
      {overlay && (
        <>
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/95" />
          
          {/* Radial overlays for depth */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60" />
          
          {/* Color accent overlays */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary/5 to-transparent" />
          
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )}

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicBackground;