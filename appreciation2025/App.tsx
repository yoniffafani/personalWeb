import React, { useState, useRef, useEffect } from 'react';
import { AppState } from './types';
import { CoverPage } from './components/CoverPage';
import { LoadingPage } from './components/LoadingPage';
import { InvitationPage } from './components/InvitationPage';
import { PrankPage } from './components/PrankPage';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.COVER);
  
  // Audio Refs
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    // Beautiful classical music (Pachelbel's Canon - Creative Commons) - using MP3 for better compatibility
    const music = new Audio('https://ia800504.us.archive.org/11/items/PachelbelCanonInDMajor/Pachelbel%20-%20Canon%20in%20D%20Major.mp3');
    music.loop = true;
    music.volume = 0.6;
    music.preload = 'auto';
    musicRef.current = music;

    // Alarm sound
    const alarm = new Audio('https://assets.mixkit.co/active_storage/sfx/995/995-preview.mp3');
    alarm.loop = true;
    alarm.volume = 1.0;
    alarm.preload = 'auto';
    alarmRef.current = alarm;

    // Preload audio
    music.load();
    alarm.load();

    return () => {
      music.pause();
      alarm.pause();
      musicRef.current = null;
      alarmRef.current = null;
    };
  }, []);

  const handleOpenInvitation = () => {
    // 1. Start music immediately upon user interaction (Click)
    if (musicRef.current) {
      musicRef.current.currentTime = 0;
      const playPromise = musicRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playback started successfully");
          })
          .catch(error => {
            console.error("Audio playback failed:", error);
            // Retry on interaction if needed, but this is the interaction.
          });
      }
    }

    // 2. Show loading screen
    setAppState(AppState.LOADING);

    // 3. Transition to invitation after 3 seconds
    setTimeout(() => {
      setAppState(AppState.INVITATION);
    }, 3000);
  };

  const handlePrankTrigger = () => {
    setAppState(AppState.PRANK);
    
    // Stop sweet music
    if (musicRef.current) {
        musicRef.current.pause();
        musicRef.current.currentTime = 0;
    }

    // Play alarm
    if (alarmRef.current) {
        alarmRef.current.currentTime = 0;
        alarmRef.current.play().catch(e => console.error("Alarm play failed", e));
    }
  };

  return (
    <div className="antialiased text-gray-900">
      {appState === AppState.COVER && (
        <CoverPage onOpen={handleOpenInvitation} />
      )}
      
      {appState === AppState.LOADING && (
        <LoadingPage />
      )}

      {appState === AppState.INVITATION && (
        <InvitationPage onPrankTrigger={handlePrankTrigger} />
      )}

      {appState === AppState.PRANK && (
        <PrankPage />
      )}
    </div>
  );
};

export default App;