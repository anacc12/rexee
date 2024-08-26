import React, { useEffect, useState } from 'react';

const CustomCursor = ({ cursorText }: { cursorText: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    backgroundColor: '#EFBA4C', // Background for better visibility
    color: '#11082b',
    padding: '6px 12px',
    borderRadius: '100px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  };

  return <div style={cursorText ? cursorStyle : {
    "display" : "none"
  }}>{cursorText}</div>;
};

export default CustomCursor;
