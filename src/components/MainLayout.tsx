
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function MainLayout({ 
  children, 
  className,
  fullHeight = false
}: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <ParticleBackground />
      
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
