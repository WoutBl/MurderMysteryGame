import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className='bg-black text-white flex flex-col h-screen w-screen justify-center items-center'>
      <div className='grid grid-rows-6 grid-cols-3 gap-4 w-screen h-screen items-center justify-center'>
        {/* Detective Oink Title */}
        <div className="col-span-3 flex justify-center row-span-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl Retro_Style">Detective Oink</h1>
            <div className="Retro_Style">Can you solve the Mystery?</div>
          </div>
        </div>

        {/* Center Image */}
        <div className="row-span-3 flex justify-center items-center row-start-2">
          <img src="/3pigs.png" alt="3 pigs" className="h-80 w-80" />
          {/* Replace '/your-image.png' with your image path */}
        </div>

        {/* Titles - Movement and Interact */}
        <div className="flex flex-col justify-center items-center col-start-1 row-start-3">
          <h1 className="text-4xl Retro_Style">
            Movement
          </h1>
          <div className="Retro_Style">Use the arrow keys on your keyboard to move</div>
        </div>
        <div className="flex flex-col justify-center items-center col-start-3 row-start-3">
          <h1 className="text-4xl Retro_Style">
            Interact
          </h1>
          <div className="Retro_Style">Get close to a pig and press e</div>
        </div>

        {/* Images - Keyboard Arrows and 'E' Key */}
        <div className="flex justify-center items-center col-start-1 row-start-4">
          <img className='h-40 w-40' src="/Keyboard_Arrows.png" alt="Keyboard Arrows" />
        </div>
        <div className="flex justify-center items-center col-start-3 row-start-4">
          <div className='flex justify-center items-center w-10 h-10 border-4 border-gray-500 bg-gray-700 Retro_Style rounded'>
            E
          </div>
        </div>

        {/* Play Game Button */}
        <div className="flex justify-center items-center col-span-3 row-start-5">
          <a href="/game" className="px-10 py-4 bg-gray-700 text-2xl Retro_Style border border-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400 rounded transition duration-150 ease-in-out">
            Play Game
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
