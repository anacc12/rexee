import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX + 18, y: e.clientY + 18 }); // Add offset
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="z-50 pointer-events-none fixed bg-yellow-400 h-3.5 w-3.5 rounded-full"
      animate={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 80, // Lower stiffness for smoother motion
        damping: 15,   // Higher damping for less "bounce"
        mass: 0.5,
      }}
    />
  );
};

export default CursorFollower;
