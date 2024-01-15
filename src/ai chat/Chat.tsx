import { HistoryItem, InworldConnectionService } from '@inworld/web-core';
import React, { useRef } from 'react';
import { useCallback, useState } from 'react';

interface ChatProps {
  chatHistory: HistoryItem[];
  connection: InworldConnectionService;
  onRestore: (state: string) => Promise<void>;
  prevTranscripts: string[];
}

export function Chat(props: ChatProps) {
  const { chatHistory, connection } = props;

  
  const chatHistoryList = chatHistory.map((chat, index) => (
    <div key={index}>
      {/* @ts-ignore */}
      {chat.text} 
    </div>
  ));
  const [text, setText] = useState('');

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [],
  );


  const handleSend = useCallback(() => {
    if (text) {
      connection?.sendText(text);

      setText('');
    }
  }, [connection, text]);



  return(
    
    
    <div>
      <div>
        {chatHistoryList}
      </div>
        <input type="text" value={text} onChange={handleTextChange}/>
        <button type="button" onClick={handleSend}>Send</button>
    </div>
  )
}
