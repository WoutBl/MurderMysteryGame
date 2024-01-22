import React from 'react';
import { useLocation } from "react-router-dom";

const Finish: React.FC = (props) => {
    const { state } = useLocation();
    //@ts-ignore
    console.log(state.winner)
  return (
    
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
        {state.winner?
            <div className='flex flex-col h-20  justify-center items-center'>
                <h1 className="text-3xl font-bold">
                    You Have Won!
                    Piglett was the killer, good job!
                </h1>
            </div>
            :
            <div className='flex flex-col h-20  justify-center items-center'>
                <h1 className="text-3xl font-bold">
                    You Have Lost!
                    Piglett was the killer, Sorry
                </h1>
            </div>}
        
        <a className='py-2.5 px-5 mt-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' type='button' href="/">
            Play Again
        </a>
    </div>
  );
}

export default Finish;
