import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../lib/utils';

interface AudioPlayerProps {
  text: string;
  className?: string;
  autoPlay?: boolean;
  language?: string;
}

export function AudioPlayer({ text, className, autoPlay = false, language = 'en-US' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    setIsSupported('speechSynthesis' in window);
    
    if (autoPlay && isSupported) {
      handlePlay();
    }

    return () => {
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, [text, autoPlay, isSupported]);

  const handlePlay = () => {
    if (!isSupported || !text) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8; // Slightly slower for educational content
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleReplay = () => {
    handlePause();
    setTimeout(handlePlay, 100);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={isPlaying ? handlePause : handlePlay}
        className="flex items-center gap-1"
      >
        {isPlaying ? (
          <Pause className="h-3 w-3" />
        ) : (
          <Play className="h-3 w-3" />
        )}
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleReplay}
        disabled={isPlaying}
        className="flex items-center gap-1"
      >
        <RotateCcw className="h-3 w-3" />
        Replay
      </Button>

      <Volume2 className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}