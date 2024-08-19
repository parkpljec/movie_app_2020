import React, { useState, useEffect } from 'react';

const ArrowKeyMover = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 10 }));
        break;
      case 'ArrowDown':
        setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 10 }));
        break;
      case 'ArrowLeft':
        setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
        break;
      case 'ArrowRight':
        setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'tomato',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default ArrowKeyMover;
