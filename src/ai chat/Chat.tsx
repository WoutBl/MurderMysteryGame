import { HistoryItem, InworldConnectionService } from '@inworld/web-core';
import React, { useEffect, useRef } from 'react';
import { useCallback, useState } from 'react';

interface ChatProps {
  chatHistory: HistoryItem[];
  connection: InworldConnectionService;

  popupInfo: any;
}
interface Chat1Props {
  chatHistory1: HistoryItem[];
  connection: InworldConnectionService;

  popupInfo: any;
}

export function Chat(props: ChatProps) {
  const { chatHistory, connection, popupInfo } = props;
  const chatHistoryList = chatHistory.map((chat, index) => {
    if (chat.type !== 'interaction_end') {
      if (chat.source.isPlayer) {
        // Code to execute if isPlayer is true
        return (
          <div className='flex  justify-end my-5'>
            <div className='flex justify-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700' key={index}>
              <div className="flex flex-col items-end">
                {/* @ts-ignore */}
                <div className="text-sm mb-1 font-semibold text-gray-900 dark:text-white">Detective Oink</div>
                {/* @ts-ignore */}
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{chat.text}</div> 
              </div>
              
            </div>
          </div>
        );
      } else {
        // Code to execute if isPlayer is false
        return (
          <div className='flex  justify-start my-5'>
            <div className='flex justify-start flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700' key={index}>
              <div className="flex flex-col  ">
                  {/* @ts-ignore */}
                  <div className="text-sm mb-1 font-semibold text-gray-900 dark:text-white">{chat.character.displayName}</div>
                  {/* @ts-ignore */}
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{chat.text}</div> 
                </div>
            </div>
          </div>
        );
      }
    }else{
      return (
        <div></div>
      );
    }
  });

  
  const [text, setText] = useState('');

  
  const handleSend = useCallback((e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.preventDefault(); // Prevents default form submission behavior
    }
    
    if (text) {
        connection?.sendText(text);
        setText('');
    }
  }, [connection, text]);
  
  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }, [handleSend]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);


  const messagesEndRef = useRef<HTMLDivElement>(null);


  return(
    
    
    <div className=''>
        <div className='max-h-96 mb-5 overflow-y-auto scroll_track scroll_bar scroll_thumb'>
          {chatHistoryList}
          <div ref={messagesEndRef} />
        </div> 
        <input type="text" value={text} onKeyDown={handleKeyDown} onChange={handleTextChange} className="w-96  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={"What do you want to say to " + popupInfo.name} />
        <button type="button" className="absolute right-7 bottom-7" onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
          </svg>
        
        </button>
    </div>
  )
}


export function Chat1(props: Chat1Props) {
  const { chatHistory1, connection, popupInfo } = props;
  const chatHistoryList1 = chatHistory1.map((chat, index) => {
    if (chat.type !== 'interaction_end') {
      if (chat.source.isPlayer) {
        // Code to execute if isPlayer is true
        return (
          <div className='flex  justify-end my-5'>
            <div className='flex justify-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700' key={index}>
              <div className="flex flex-col items-end">
                {/* @ts-ignore */}
                <div className="text-sm mb-1 font-semibold text-gray-900 dark:text-white">Detective Oink</div>
                {/* @ts-ignore */}
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{chat.text}</div> 
              </div>
              
            </div>
          </div>
        );
      } else {
        // Code to execute if isPlayer is false
        return (
          <div className='flex  justify-start my-5'>
            <div className='flex justify-start flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700' key={index}>
              <div className="flex flex-col  ">
                  {/* @ts-ignore */}
                  <div className="text-sm mb-1 font-semibold text-gray-900 dark:text-white">{chat.character.displayName}</div>
                  {/* @ts-ignore */}
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{chat.text}</div> 
                </div>
            </div>
          </div>
        );
      }
    } else{
      return(
        <div></div>
      )
    }
  });

  const [text, setText] = useState('');

  
  const handleSend = useCallback((e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.preventDefault(); // Prevents default form submission behavior
    }
    
    if (text) {
        connection?.sendText(text);
        setText('');
      
    }
  }, [connection, text]);
  
  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }, [handleSend]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory1]);



  const messagesEndRef = useRef<HTMLDivElement>(null);


  return(
    <div className=''>
        <div className='max-h-96 mb-5 overflow-y-auto scroll_track scroll_bar scroll_thumb'>
          {chatHistoryList1}
          <div ref={messagesEndRef} />
        </div> 
        <input type="text" value={text} onKeyDown={handleKeyDown} onChange={handleTextChange} className="w-96  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={"What do you want to say to " + popupInfo.name} />
        <button type="button" className="absolute right-7 bottom-7" onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
          </svg>
        
        </button>
    </div>
  )
}