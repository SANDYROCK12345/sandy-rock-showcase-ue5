
import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  horizontalScroll?: boolean;
}

export default function MainLayout({ 
  children, 
  className,
  fullHeight = false,
  horizontalScroll = false
}: MainLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scroll with mouse wheel
  useEffect(() => {
    if (!horizontalScroll || !containerRef.current) return;
    
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      }
    };
    
    const currentRef = containerRef.current;
    currentRef.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [horizontalScroll]);

  if (horizontalScroll) {
    return (
      <div className="h-screen overflow-hidden bg-background">
        <Navbar fixedNav={true} />
        
        <div
          ref={containerRef}
          className="h-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          <motion.main 
            className={cn(
              "h-screen flex min-w-max",
              className
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
          
          <div className="min-w-screen h-screen flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <motion.main 
        className={cn(
          "flex-1 w-full mx-auto", 
          fullHeight ? "pt-16" : "pt-32 pb-20",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}
