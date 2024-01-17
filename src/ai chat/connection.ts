import {
  AdditionalPhonemeInfo,
  AudioPlaybackConfig,
  Capabilities,
  HistoryItem,
  InworldClient,
  InworldConnectionService,
  InworldPacket,
  SessionContinuationProps,
} from '@inworld/web-core';

import { Config } from './config';


interface InworldServiceProps {
  audioPlayback?: AudioPlaybackConfig;
  capabilities: Capabilities;
  continuation?: SessionContinuationProps;
  sceneName: string;
  playerName: string;
  onReady: () => void;
  onPhoneme: (phonemeData: AdditionalPhonemeInfo[]) => void;
  onMessage: (inworldPacket: InworldPacket) => void;
  onHistoryChange: (history: HistoryItem[]) => void;
  onDisconnect: () => void;
}

export class InworldService {
  connection: InworldConnectionService;

  constructor(props: InworldServiceProps) {
    const client = new InworldClient()
      .setConfiguration({
        capabilities: props.capabilities,
        audioPlayback: props.audioPlayback,
      })
      .setUser({ fullName: props.playerName })
      .setScene(props.sceneName)
      .setGenerateSessionToken(() => this.generateSessionToken(props.sceneName)) // Fix: Ensure generateSessionToken returns Promise<SessionToken>
      .setOnError((err) => console.log(err))
      .setOnReady(props.onReady)
      .setOnMessage(props.onMessage)
      .setOnPhoneme(props.onPhoneme)
      .setOnHistoryChange(props.onHistoryChange)
      .setOnDisconnect(props.onDisconnect);
      
      console.log(client)

    if (props.continuation) {
      client.setSessionContinuation(props.continuation);
    }

    this.connection = client.build();
    console.log(this.connection)
  }
  

  private async generateSessionToken(scene: String) {
    if(scene === "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_green"){
      const response = await fetch(Config.GENERATE_TOKEN_URL);
      return response.json();
    }if(scene === "workspaces/default-wg5alkcmfch8nlkl72oy1w/characters/pig_red"){
      const response = await fetch(Config.GENERATE_TOKEN_URL1);
      return response.json();
    }
  }
}
