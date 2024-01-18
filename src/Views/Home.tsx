import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
      <div className='grid grid-rows-2 grid-cols-3 w-screen'>
        <div className="flex flex-col h-20  justify-center items-center">
          <h1 className="text-3xl font-bold">
            Movement
          </h1>
          <div>Use the arrow keys on your keyboard to move</div>
        </div>
        <div className="flex flex-col h-20  justify-center items-center">
          <h1 className="text-3xl font-bold">Detective Oink</h1>
          <div>Can you solve the Mystery?</div>
        </div>
        <div className="flex flex-col h-20 justify-center items-center">
          <h1 className="text-3xl font-bold">
            Interact
          </h1>
          <div>Get close to a pig and press e</div>
        </div>
        <div className="flex flex-col h-20  justify-center items-center">
          <div>
            <img className='h-40 w-40' src="/Keyboard_Arrows.png" alt="" />
          </div>
        </div>
        
        <div className="flex flex-col h-20  justify-center items-center">
          <a type="button" href="/game" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Play Game</a>
        </div>
        
        <div className="flex flex-col h-20  justify-center items-center">
          <div className='flex justify-center items-center w-10 h-10 border-4 border-black'>
            E
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
