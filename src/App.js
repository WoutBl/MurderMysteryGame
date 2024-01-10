import React, { useEffect, useRef, useCallback, useState } from 'react';
import Spline from "@splinetool/react-spline";
import Popup from 'reactjs-popup';


export default function App() {
  const splineRef = useRef(null);
  const requestRef = useRef();
  const [isEKeyPressed, setIsEKeyPressed] = useState(false);
  const [GreenIsOpen, setGreenIsOpen] = useState(false);
  const [RedIsOpen, setRedIsOpen] = useState(false);
  const [PinkIsOpen, setPinkIsOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState({ show: false, name: '' });
  
  

  const checkDistances = useCallback(() => {
    if (splineRef.current) {
      const obj = splineRef.current.findObjectByName('pig');
      const obj1 = splineRef.current.findObjectByName('pig 4');
      const obj2 = splineRef.current.findObjectByName('pig 2');
      const obj3 = splineRef.current.findObjectByName('pig 3');
      
      
      

      if (obj && obj1 && obj2 && obj3) {
        const distancegreen = obj.position.distanceTo(obj1.position);
        const distancered = obj.position.distanceTo(obj2.position);
        const distancepink = obj.position.distanceTo(obj3.position);
        console.log("green: " + distancegreen + ", red: " + distancered + ", pink: " + distancepink)

        
          let closest = { distance: Infinity, position: null, name: '' };
          if (distancegreen > 459) {
            if (isEKeyPressed) {
              if(GreenIsOpen === true) {
                setGreenIsOpen(false);
              }
              else {
                setGreenIsOpen(true);
              }
            }
            
            closest = { distance: distancegreen, position: obj1.position, name: 'Green' };
          }
          else{
            setGreenIsOpen(false);
          }
          if (distancered > 555.2) {
            if (isEKeyPressed) {
              if(RedIsOpen === true) {
                setRedIsOpen(false);
              }
              else {
                setRedIsOpen(true);
              }
            }
            closest = { distance: distancered, position: obj2.position, name: 'Red' };
          }else{
            setRedIsOpen(false);
          }
          if (distancepink < 907.9) {
            if (isEKeyPressed) {
              if(PinkIsOpen === true) {
                setPinkIsOpen(false);
              }
              else {
                setPinkIsOpen(true);
              }
            }
            closest = { distance: distancepink, position: obj3.position, name: 'Pink' };
          }
          else{
            setPinkIsOpen(false);
          }
          
          if (closest.position) {
            setPopupInfo({ show: true, position: closest.position, name: closest.name });
          } else {
            setPopupInfo({ show: false, position: { x: 0, y: 0, z: 0 }, name: '' });
          }
        }
      
    }
  }, [isEKeyPressed]);


//   function toScreenPosition(obj, camera) {
//     const tempVector = new THREE.Vector3();

//     // project 3D position to the 2D screen space
//     obj.updateMatrixWorld();
//     tempVector.setFromMatrixPosition(obj.matrixWorld);
//     tempVector.project(camera);

//     // convert normalized device coordinate (NDC) space to canvas space
//     const x = (tempVector.x * 0.5 + 0.5) 
//     const y = -(tempVector.y * 0.5 - 0.5)

//     return { x, y };
// }

  const updateSplineState = useCallback(() => {
    checkDistances();
    requestRef.current = requestAnimationFrame(updateSplineState);
  }, [checkDistances]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'e') {
        setIsEKeyPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'e') {
        setIsEKeyPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    requestRef.current = requestAnimationFrame(updateSplineState);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [updateSplineState]);

  const onLoad = (spline) => {
    splineRef.current = spline;
    updateSplineState();
  };

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/QBB4OjMubbnPuZoD/scene.splinecode"
        onLoad={onLoad}
      />
        <Popup open={GreenIsOpen || RedIsOpen || PinkIsOpen} position="right center">
        
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center  justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          {popupInfo.name}
                      </h3>
                  </div>
                  <div class="p-4  md:p-5 space-y-4">
                    <div class="flex justify-center">
                        <input type="text" class="w-96  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={"What do you want to say to " + popupInfo.name} />
                    </div>
                  </div>
                  
              </div>
          </div>
        </Popup>
          
        
    </div>
  );
}
