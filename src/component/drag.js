import React, { useState, useRef } from 'react';

const DraggableComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    ref.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX - ref.current.x;
      const dy = e.clientY - ref.current.y;
      setPosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));
      ref.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'skyblue',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'grab',
      }}
    />
  );
};

export default DraggableComponent;
