import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-stone-900">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full aspect-video"
        poster="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/60 to-transparent p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium">{title}</h3>
          <div className="flex space-x-4">
            <button
              onClick={toggleMute}
              className="text-white hover:text-forest-400 transition-colors"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>
            <button
              onClick={togglePlay}
              className="text-white hover:text-forest-400 transition-colors"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}