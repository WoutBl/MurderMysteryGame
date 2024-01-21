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
  const [KnifeIsOpen, setKnifeIsOpen] = useState(false);
  const [knifePopupOpened ,setKnifePopupOpened] = useState(false);
  const [popupInfo, setPopupInfo] = useState({ show: false, name: '' });
  const knife = useRef();

  const [connection, setConnection] = useState();

  const [chatHistory, setChatHistory] = useState([]);
  const [prevChatHistory, setPrevChatHistory] = useState([]);
  const [prevTranscripts, setPrevTranscripts] = useState([]);


  const [connection1, setConnection1] = useState();

  const [chatHistory1, setChatHistory1] = useState([]);
  const [prevChatHistory1, setPrevChatHistory1] = useState([]);
  const [prevTranscripts1, setPrevTranscripts1] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const [LoadingHTML, setLoadingHTML] = useState();

  const openConnection = useCallback(
    async (previousState) => {
      
      const currentTranscript = connection?.getTranscript() || '';

      setPrevTranscripts([
        ...prevTranscripts,
        ...(currentTranscript ? [currentTranscript] : []),
      ]);
      setPrevChatHistory([...prevChatHistory, ...chatHistory]);
      setChatHistory([]);


      const duration = 0;
      const ticks = 0;
      const previousDialog = false

      console.log('Connecting to Inworld Service');
      const service = new InworldService({
        onHistoryChange: async (history) => {
          setChatHistory(history);
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
            console.log("Emotion")
          }
        },
      }); 

      const characters = await service.connection.getCharacters();
      const character = characters.find(
        (c) => c.resourceName === "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_green",
      );

      if (character) {
        service.connection.setCurrentCharacter(character);

      } else {
        console.error(
          'Character not found in scene. Was it added?:',
          "not found",
        );
        return;
      }

      setConnection(service.connection);
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
        service.connection.setCurrentCharacter(character);
      } else {
        console.error(
          'Character not found in scene. Was it added?:',
          character,
        );
        return;
      }
      setConnection1(service.connection);
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
      const obj4 = splineRef.current.findObjectById('6e03b819-82b7-40c1-9fc3-f868da67c544');
      
      
      

      if (obj && obj1 && obj2 && obj3 && obj4) {
        const distancegreen = obj.position.distanceTo(obj1.position);
        const distancered = obj.position.distanceTo(obj2.position);
        const distancepink = obj.position.distanceTo(obj3.position);
        const distanceknife = obj.position.distanceTo(obj4.position);


        
          let closest = { distance: Infinity, position: null, name: '' };
          if (distancegreen > 459) {
            if (isEKeyPressed) {
              if(!GreenIsOpen) {
                setGreenIsOpen(true);
                connection.player.mute(false)
              }
            }
            
            closest = { distance: distancegreen, position: obj1.position, name: 'Piglett' };
          }
          else{
            setGreenIsOpen(false);
          }
          if (distancered > 555.2) {
            if (isEKeyPressed) {
              if(!RedIsOpen) {
                setRedIsOpen(true);
                connection.player.mute(false)
              }
            }
            closest = { distance: distancered, position: obj2.position, name: 'Porkchop' };
          }else{
            setRedIsOpen(false);
          }
          if (distancepink < 907.9) {
            if (isEKeyPressed) {
              if(!PinkIsOpen) {
                setPinkIsOpen(true);
              }
            }
            closest = { distance: distancepink, position: obj3.position, name: 'Hamm' };
          }
          else{
            setPinkIsOpen(false);
          }
          if (distanceknife > 1416.65 ) {
            if (isEKeyPressed) {
              if(KnifeIsOpen === false && !knifePopupOpened) {
                setKnifeIsOpen(true);
                setKnifePopupOpened(true); // Set to true when opened for the first time
              }
            }
            closest = { distance: distanceknife, position: obj4.position, name: 'Knife' };
          }
          else{
            setKnifeIsOpen(false);
          }
          
          if (closest.position) {
            setPopupInfo({ show: true, position: closest.position, name: closest.name });
          } else {
            setPopupInfo({ show: false, position: { x: 0, y: 0, z: 0 }, name: '' });
          }
        }
      
    }
  }, [isEKeyPressed, GreenIsOpen, RedIsOpen, PinkIsOpen, KnifeIsOpen, knifePopupOpened]);



  const updateSplineState = useCallback(() => {
    checkDistances();
    requestRef.current = requestAnimationFrame(updateSplineState);
  }, [checkDistances]);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsEKeyPressed(true);
    };
  
    const handleTouchEnd = () => {
      setIsEKeyPressed(false);
    };

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
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    requestRef.current = requestAnimationFrame(updateSplineState);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [updateSplineState]);


  useEffect(() => {
    if (isLoading) {
      setLoadingHTML(
        <div className="absolute top-0 left-0 h-screen w-screen flex  bg-gray-700/50">
          <div className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 flex flex-col items-center'>
            <svg aria-hidden="true" className=" w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                
            </svg>
            <strong className='mt-5 text-xl'>Loading Game</strong>
          </div>
          
          
      </div>
      )
    }else{
      setLoadingHTML(
        <div></div>
      )
    }
  }, [isLoading]);

  

  const onLoad = (spline) => {
    
    setIsLoading(false)
      
    openConnection();
    openConnection1();
    splineRef.current = spline;
    knife.current = spline.findObjectById('6e03b819-82b7-40c1-9fc3-f868da67c544');
    updateSplineState();
  };
  

  const onClose = () => {
    setGreenIsOpen(false);
    connection.player.mute(true)
  }

  const onClose1 = () => {
    setRedIsOpen(false);
    connection.player.mute(true)
    
  }
  const onClose2 = () => {
    splineRef.current.emitEvent('mouseHover', '6e03b819-82b7-40c1-9fc3-f868da67c544');
    setKnifeIsOpen(false);
    
    connection.sendTrigger("found_knife");
  }

  

  return (
    <div className='h-screen relative'>
      <Spline
        scene="https://prod.spline.design/GYIVEIdMlDugd5IJ/scene.splinecode"
        onLoad={onLoad}
      />
      <div className='absolute right-10 top-1/3'>
        <div className='border-4 border-gray-700 bg-gray-600/90 w-20 h-20 rounded-lg mb-5'>
          {
            knifePopupOpened ? (
              
              <img src='/Knife.png'  className='absolute h-16 w-32 -left-1 object-cover' alt='Knife'/>
            ) : (
              <div></div>
              
            )
          }
        </div>
        <div className='border-4 border-gray-700 bg-gray-600/90 w-20 h-20 rounded-lg mb-5'>

        </div>
        <div className='border-4 border-gray-700 bg-gray-600/90 w-20 h-20 rounded-lg'>

        </div>
        
      </div>
      {LoadingHTML}
        <Popup onClose={onClose} open={GreenIsOpen}  position="right center">
        
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
        <Popup onClose={onClose1} open={RedIsOpen} position="right center">
        
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
        <Popup onClose={onClose2} open={KnifeIsOpen} position="right center">
        
          <div className="relative  p-4 w-full max-w-2xl ">
              <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {popupInfo.name}
                      </h3>
                      <button onClick={onClose2}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                      </button>
                  </div>
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="flex justify-center">

                      You have found a knife with blood on it. You put this in a plastic bag and label it.
                          
                        
                    </div>
                  </div>
                  
              </div>
          </div>
        </Popup>
          
        
    </div>
  );
}
