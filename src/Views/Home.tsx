import React from 'react';

const Homepage: React.FC = () => {
  return (
    (
      <div className='bg-black text-white flex flex-col h-screen w-screen justify-center items-center'>
        <div className='grid grid-rows-2 grid-cols-3 w-screen gap-4'>
          <div className="flex flex-col h-20 justify-center items-center">
            <h1 className="text-3xl Retro_Style">
              Movement
            </h1>
            <div className="Retro_Style">Use the arrow keys on your keyboard to move</div>
          </div>
          <div className="flex flex-col h-20 justify-center items-center">
            <h1 className="text-3xl Retro_Style">Detective Oink</h1>
            <div className="Retro_Style">Can you solve the Mystery?</div>
          </div>
          <div className="flex flex-col h-20 justify-center items-center">
            <h1 className="text-3xl Retro_Style">
              Interact
            </h1>
            <div className="Retro_Style">Get close to a pig and press e</div>
          </div>
          <div className="flex flex-col h-20 justify-center items-center">
            <div>
              <img className='h-40 w-40' src="/Keyboard_Arrows.png" alt="Keyboard Arrows" />
            </div>
          </div>
          
          <div className="flex flex-col h-20 justify-center items-center">
            <a href="/game" className="mt-5 px-5 py-2.5 bg-gray-700 text-lg Retro_Style border border-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400 rounded transition duration-150 ease-in-out">
              Play Game
            </a>
          </div>
          
          <div className="flex flex-col h-20 justify-center items-center">
            <div className='flex justify-center items-center w-10 h-10 border-4 border-gray-500 bg-gray-700 Retro_Style rounded'>
              E
            </div>
          </div>
        </div>
      </div>
  )
  );
}

export default Homepage;
