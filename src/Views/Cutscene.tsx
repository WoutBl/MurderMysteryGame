import React from 'react';

const Cutscene: React.FC = () => {
    const Ended = () => {
        console.log(' ended');
        window.location.href = '/game';
    }
  return (
    <div className='bg-black text-white flex h-screen w-screen justify-center items-center'>
      <video autoPlay onEnded={Ended} className='absolute h-full w-full object-cover'>
        <source src='/CutScene.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

export default Cutscene;
