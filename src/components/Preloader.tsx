import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
  const [visibleLetters, setVisibleLetters] = useState<boolean[]>(new Array(7).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % letters.length;
        
        // Update visible letters
        setVisibleLetters((prevVisible) => {
          const newVisible = [...prevVisible];
          
          // Make current letter visible
          newVisible[next] = true;
          
          // Hide previous letters with some delay to create wave effect
          if (next > 2) {
            newVisible[next - 3] = false;
          }
          
          return newVisible;
        });
        
        return next;
      });
    }, 200);

    // Complete loading after 3 seconds
    const completeTimer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Particle Background */}
        <div className="particle-bg" />
        
        {/* Loading Text */}
        <div className="flex space-x-4">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`text-6xl font-display tracking-wider transition-all duration-300 ${
                visibleLetters[index] 
                  ? 'text-accent glow-primary scale-110' 
                  : 'text-muted-foreground/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: visibleLetters[index] ? 1 : 0.3,
                y: visibleLetters[index] ? 0 : 20,
                scale: visibleLetters[index] ? 1.1 : 1
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;