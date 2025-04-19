
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BackgroundVideoProps {
  src: string;
  opacity?: number;
  blur?: number;
  overlayColor?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  opacity = 0.2,
  blur = 3,
  overlayColor = 'rgba(0, 0, 0, 0.5)'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ 
          opacity, 
          filter: `blur(${blur}px)` 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 1.5 }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor, mixBlendMode: 'multiply' }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/95"></div>
    </div>
  );
};

export default BackgroundVideo;
