import React, { useEffect, useRef, useCallback } from 'react';
import Spline from "@splinetool/react-spline";

export default function App() {
  const splineRef = useRef(null); // Reference to the spline object
  const requestRef = useRef(); // Reference for the animation frame request

  const updateSplineState = useCallback(() => {
    if (splineRef.current) {
      const obj = splineRef.current.findObjectByName('pig');
      const obj1 = splineRef.current.findObjectByName('pig 4');

      if (obj && obj1) {
        const distance = obj.position.distanceTo(obj1.position);
        console.log(distance); 

        if (distance < 200) {
          console.log("Objects are close!");
        }
      }
    }

    requestRef.current = requestAnimationFrame(updateSplineState);
  }, []);

  const handleKeyDown = (e) => {
    console.log('Key pressed:', e.key);
    // Implement your logic here based on the key pressed
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateSplineState);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateSplineState]);

  const onLoad = (spline) => {
    splineRef.current = spline;
    updateSplineState();
  };

  return (
    <Spline 
      scene="https://prod.spline.design/4OObmHyHjYqaDpe9/scene.splinecode"
      onLoad={onLoad}
    />
  );
}
