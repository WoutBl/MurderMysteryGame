import React, { useEffect, useRef, useCallback, useState } from 'react';
import Spline from "@splinetool/react-spline";
import Popup from 'reactjs-popup';
import { InworldService } from './ai chat/connection'
import { Chat } from './ai chat/Chat'


export default function App() {
  
  const splineRef = useRef(null);
  const requestRef = useRef();
  const [isEKeyPressed, setIsEKeyPressed] = useState(false);
  const [GreenIsOpen, setGreenIsOpen] = useState(false);
  const [RedIsOpen, setRedIsOpen] = useState(false);
  const [PinkIsOpen, setPinkIsOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState({ show: false, name: '' });
  const [connection, setConnection] = useState();
  const [character, setCharacter] = useState();
  const [characters, setCharacters] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [prevChatHistory, setPrevChatHistory] = useState([]);
  const [prevTranscripts, setPrevTranscripts] = useState([]);
  const [chatting, setChatting] = useState(false);
  const [chatView, setChatView] = useState();
  

  const onHistoryChange = useCallback((history) => {
    setChatHistory(history);
  }, []);

  const openConnection = useCallback(
    async (previousState) => {
      
      const currentTranscript = connection?.getTranscript() || '';

      setPrevTranscripts([
        ...prevTranscripts,
        ...(currentTranscript ? [currentTranscript] : []),
      ]);
      setPrevChatHistory([...prevChatHistory, ...chatHistory]);
      setChatHistory([]);
      setChatting(true);
      setChatView("Text");

      const duration = 0;
      const ticks = 0;
      const previousDialog = false

      console.log('Connecting to Inworld Service');
      const service = new InworldService({
        onHistoryChange,
        ...(previousDialog.length && { continuation: { previousDialog } }),
        ...(previousState && { continuation: { previousState } }),
        ...(duration &&
          ticks && {
            audioPlayback: {
              stop: { duration, ticks },
            },
          }),
        sceneName: "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_green",
        playerName: "Detective Oink",
        
        onReady: async () => {
          console.log('Ready!');
        },
        onDisconnect: () => {
          console.log('Disconnect!');
        },
        onMessage: (inworldPacket) => {
          if (
            inworldPacket.isEmotion() &&
            inworldPacket.packetId?.interactionId
          ) {
            console.log("lol")
          }
        },
      });

      const characters = await service.connection.getCharacters();
      const character = characters.find(
        (c) => c.resourceName === "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_green",
      );

      if (character) {
        service.connection.setCurrentCharacter(character);

        const assets = character?.assets;
        const rpmImageUri = assets?.rpmImageUriPortrait;
        const avatarImg = assets?.avatarImg;
        setAvatar(avatarImg || rpmImageUri || '');
      } else {
        console.error(
          'Character not found in scene. Was it added?:',
          "not found",
        );
        return;
      }

      setConnection(service.connection);

      setCharacter(character);
      setCharacters(characters);
    },
    [
      chatHistory,
      connection,
      onHistoryChange,
      prevChatHistory,
      prevTranscripts,
    ],
  );
  

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
        

        
          let closest = { distance: Infinity, position: null, name: '' };
          if (distancegreen > 459) {
            if (isEKeyPressed) {
              if(GreenIsOpen === false) {
                setGreenIsOpen(true);
              }
            }
            
            closest = { distance: distancegreen, position: obj1.position, name: 'Piglett' };
          }
          else{
            setGreenIsOpen(false);
          }
          if (distancered > 555.2) {
            if (isEKeyPressed) {
              if(RedIsOpen === false) {
                setRedIsOpen(true);
              }
            }
            closest = { distance: distancered, position: obj2.position, name: 'Porkchop' };
          }else{
            setRedIsOpen(false);
          }
          if (distancepink < 907.9) {
            if (isEKeyPressed) {
              if(PinkIsOpen === false) {
                setPinkIsOpen(true);
              }
            }
            closest = { distance: distancepink, position: obj3.position, name: 'Hamm' };
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
    openConnection();
    splineRef.current = spline;
    updateSplineState();
  };

  const onClose = () => {
    setGreenIsOpen(false);
    setRedIsOpen(false);
    setPinkIsOpen(false);
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/QBB4OjMubbnPuZoD/scene.splinecode"
        onLoad={onLoad}
      />
      
        <Popup onClose={onClose} open={GreenIsOpen || RedIsOpen || PinkIsOpen} position="right center">
        
          <div class="relative  p-4 w-full max-w-2xl ">
              <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          {popupInfo.name}
                      </h3>
                      <button onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                      </button>
                  </div>
                  <div class="p-4 md:p-5 space-y-4">
                    <div class="flex justify-center">
                        <Chat
                          connection={connection}
                          chatHistory={chatHistory}
                          popupInfo={popupInfo}
                        />
                    </div>
                  </div>
                  
              </div>
          </div>
        </Popup>
          
        
    </div>
  );
}
