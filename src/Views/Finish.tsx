import React from 'react';
import { useLocation } from "react-router-dom";

const Finish: React.FC = (props) => {
    const { state } = useLocation();
    //@ts-ignore
    console.log(state.winner)
  return (
    
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
        {state.winner?
            <div className="bg-black w-full h-screen flex flex-col items-center justify-center text-center px-4">
                <div className="text-white Retro_Style  text-9xl">YOU WIN</div>
                {/* Retro-style revelation text */}
                <p className=" Retro_Style text-4xl text-white mt-4">
                Piglett was the killer, Good Job!
                </p>
                {/* Include the pig image below the text */}
                <img src='/pig.png' alt="Little Gray Pig" className=" h-60 mt-5" />
                <a className="mt-8 py-2 px-4 text-lg font-bold text-white bg-purple-700 rounded-full border border-transparent hover:border-purple-300 hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0" href="/">
                Play Again
                </a>
            </div>
            :
            <div className="bg-black w-full h-screen flex flex-col items-center justify-center text-center px-4">
                <div className="text-white Retro_Style  text-9xl">YOU LOSE</div>
                {/* Retro-style revelation text */}
                <p className=" Retro_Style text-4xl text-white mt-4">
                Piglett was the killer, Try again next time!
                </p>
                {/* Include the pig image below the text */}
                <img src='/Lose_Pigs.png' alt="Little Gray Pig" className="h-80 mt-5" />
                <a className="mt-8 py-2 px-4 text-lg font-bold text-white bg-purple-700 rounded-full border border-transparent hover:border-purple-300 hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0" href="/">
                Play Again
                </a>
            </div>
            }
        
        
    </div>
  );
}

export default Finish;
