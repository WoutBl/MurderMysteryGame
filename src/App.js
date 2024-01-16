import React, { useEffect, useRef, useCallback, useState } from 'react';
import Spline from "@splinetool/react-spline";
import Popup from 'reactjs-popup';
import { InworldService } from './ai chat/connection'
import { Chat, Chat1 } from './ai chat/Chat'


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

  const [connection1, setConnection1] = useState();
  const [character1, setCharacter1] = useState();
  const [characters1, setCharacters1] = useState([]);
  const [avatar1, setAvatar1] = useState('');
  const [chatHistory1, setChatHistory1] = useState([]);
  const [prevChatHistory1, setPrevChatHistory1] = useState([]);
  const [prevTranscripts1, setPrevTranscripts1] = useState([]);
  const [chatting1, setChatting1] = useState(false);
  const [chatView1, setChatView1] = useState();
  

 

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
        onHistoryChange: async (history) => {
          setChatHistory1(history);
        },
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
      
      prevChatHistory,
      prevTranscripts,
    ],
  );
  
  const openConnection1 = useCallback(
    async (previousState) => {
      
      const currentTranscript = connection1?.getTranscript() || '';
      
      setPrevTranscripts1([
        ...prevTranscripts1,
        ...(currentTranscript ? [currentTranscript] : []),
      ]);
      setPrevChatHistory1([...prevChatHistory1, ...chatHistory1]);
      setChatHistory1([]);
      setChatting1(true);
      setChatView1("Text");

      const duration = 0;
      const ticks = 0;
      const previousDialog = false

      console.log('Connecting to Inworld Service');
      const service = new InworldService({
        onHistoryChange: async (history) => {
          setChatHistory1(history);
        },
        ...(previousDialog.length && { continuation: { previousDialog } }),
        ...(previousState && { continuation: { previousState } }),
        ...(duration &&
          ticks && {
            audioPlayback: {
              stop: { duration, ticks },
            },
          }),
        sceneName: "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_red",
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
        (c) => c.resourceName === "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_red",
      );

      if (character) {
        console.log("character found"+JSON.stringify(character))
        service.connection.setCurrentCharacter(character);

        const assets = character?.assets;
        const rpmImageUri = assets?.rpmImageUriPortrait;
        const avatarImg = assets?.avatarImg;
        setAvatar1(avatarImg || rpmImageUri || '');
      } else {
        console.error(
          'Character not found in scene. Was it added?:',
          character,
        );
        return;
      }
      setConnection1(service.connection);

      setCharacter1(character);
      setCharacters1(characters);
    },
    [
      chatHistory1,
      connection1,
      prevChatHistory1,
      prevTranscripts1,
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
    
    splineRef.current = spline;
    updateSplineState();
  };
  const onOpen = () => {

    openConnection();
  }

  const onOpen1 = () => {

    openConnection1();
  }
  

  const onClose = () => {
    console.log("close green")
    stopChatting();
    setGreenIsOpen(false);

  }

  const onClose1 = () => {
    console.log("close red")
    stopChatting1();
    setRedIsOpen(false);
  }

  const stopChatting = useCallback(async () => {
    // Disable flags
    setChatting(false);

    // Close connection and clear connection data
    connection?.close();

  }, [connection]);

  const stopChatting1 = useCallback(async () => {
    // Disable flags
    setChatting1(false);

    // Close connection and clear connection data
    connection?.close();
  }, [connection]);

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/QBB4OjMubbnPuZoD/scene.splinecode"
        onLoad={onLoad}
      />
      
        <Popup onClose={onClose} open={GreenIsOpen} onOpen={onOpen} position="right center">
        
          <div className="relative  p-4 w-full max-w-2xl ">
              <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {popupInfo.name}
                      </h3>
                      <button onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                      </button>
                  </div>
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="flex justify-center">
                        
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
        <Popup onClose={onClose1} open={RedIsOpen} onOpen={onOpen1} position="right center">
        
          <div className="relative  p-4 w-full max-w-2xl ">
              <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {popupInfo.name}
                      </h3>
                      <button onClick={onClose1}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                      </button>
                  </div>
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="flex justify-center">

                            <Chat1
                              connection={connection1}
                              chatHistory1={chatHistory1}
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
