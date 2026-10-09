import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Eye, Heart, Video, CheckCircle2, MessageSquare, ChevronLeft, ChevronRight, Clock, Upload, Film } from 'lucide-react';
import { ReelItem } from '../types';
import { reelItems } from '../data/agencyData';
import { ambientSound } from '../utils/ambientAudio';
import { saveVideoFile, getVideoFile } from '../utils/videoStorage';

interface ReelsModalProps {
  reel: ReelItem | null;
  onClose: () => void;
  onSelectProject: (clientName: string) => void;
}

export default function ReelsModal({ reel, onClose }: ReelsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Default muted so browser allows autoplay immediately
  const [liked, setLiked] = useState(false);
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [durationStr, setDurationStr] = useState('0:10');
  const [currentTimeStr, setCurrentTimeStr] = useState('0:00');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync index when a reel is selected
  useEffect(() => {
    if (reel) {
      const idx = reelItems.findIndex((r) => r.id === reel.id);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [reel]);

  const activeReel = reel ? reelItems[currentIndex] || reel : null;

  // Lock body scroll while modal is open and unlock cleanly on exit
  useEffect(() => {
    if (reel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [reel]);

  // Load video source: checks IndexedDB first, then default generated video
  useEffect(() => {
    if (!activeReel) return;
    setVideoError(false);
    setProgress(0);

    let isMounted = true;
    getVideoFile(activeReel.id).then((blob) => {
      if (!isMounted) return;
      if (blob) {
        const url = URL.createObjectURL(blob);
        setVideoBlobUrl(url);
      } else {
        setVideoBlobUrl(activeReel.videoSrc || null);
      }
    });

    return () => {
      isMounted = false;
      if (videoBlobUrl && videoBlobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(videoBlobUrl);
      }
    };
  }, [activeReel?.id]);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!reel) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reel]);

  // Handle ambient sound simulation if real video source has errored
  useEffect(() => {
    if (!activeReel || (videoBlobUrl && !videoError)) return;
    setIsPlaying(true);
    setProgress(5);
    setLiked(false);
    setActiveSceneIdx(0);

    if (!isMuted) {
      if (activeReel.audioTrack === 'traditional') {
        ambientSound.play('chime');
      } else if (activeReel.audioTrack === 'ambient') {
        ambientSound.play('rain');
      } else {
        ambientSound.play('hearth');
      }
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 0;
        const nextVal = prev + 1.8;
        if (activeReel.scenes && activeReel.scenes.length > 0) {
          const sceneStep = 100 / activeReel.scenes.length;
          const currentIdx = Math.min(
            activeReel.scenes.length - 1,
            Math.floor(nextVal / sceneStep)
          );
          setActiveSceneIdx(currentIdx);
        }
        return nextVal;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      ambientSound.stop();
    };
  }, [activeReel?.id, isMuted, videoBlobUrl, videoError]);

  if (!reel || !activeReel) {
    return null;
  }

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    ambientSound.stop();
    onClose();
  };

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 10;
    const pct = (current / dur) * 100;
    setProgress(pct);

    const formatTime = (secs: number) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTimeStr(formatTime(current));
    setDurationStr(formatTime(dur));

    // Update active scene beat
    if (activeReel.scenes && activeReel.scenes.length > 0) {
      const sceneStep = 100 / activeReel.scenes.length;
      const currentIdx = Math.min(
        activeReel.scenes.length - 1,
        Math.floor(pct / sceneStep)
      );
      setActiveSceneIdx(currentIdx);
    }
  };

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && !videoError && videoBlobUrl) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current && !videoError && videoBlobUrl) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (!nextMuted) {
        if (activeReel.audioTrack === 'traditional') {
          ambientSound.play('chime');
        } else if (activeReel.audioTrack === 'ambient') {
          ambientSound.play('rain');
        } else {
          ambientSound.play('hearth');
        }
      } else {
        ambientSound.stop();
      }
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeReel) return;

    await saveVideoFile(activeReel.id, file);
    const newUrl = URL.createObjectURL(file);
    setVideoBlobUrl(newUrl);
    setVideoError(false);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleNextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % reelItems.length;
    setCurrentIndex(nextIdx);
  };

  const handlePrevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + reelItems.length) % reelItems.length;
    setCurrentIndex(prevIdx);
  };

  const currentScene = activeReel.scenes?.[activeSceneIdx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video showcase player"
      onClick={handleClose}
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto cursor-pointer"
    >
      {/* ALWAYS VISIBLE Fixed floating Close button in top-right of viewport */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        aria-label="Close video player"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[80] px-4 py-2.5 rounded-full bg-stone-900/90 dark:bg-stone-800/90 hover:bg-black dark:hover:bg-stone-700 active:scale-95 text-white flex items-center gap-2 transition-all cursor-pointer shadow-2xl border border-white/20 backdrop-blur-md"
      >
        <X className="w-5 h-5 text-[#FFB7B2]" />
        <span className="text-xs font-semibold font-outfit uppercase tracking-wider">Close</span>
        <span className="hidden sm:inline-block text-[10px] font-mono opacity-60 bg-white/20 px-1.5 py-0.5 rounded">ESC</span>
      </button>

      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FDFCF8] dark:bg-[#1C1B19] text-[#292524] dark:text-[#F5F5F0] rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row gap-6 items-center my-auto cursor-default transition-colors duration-200"
      >
        {/* Hidden File Input for video upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Top bar on Mobile for easy close */}
        <div className="w-full flex items-center justify-between md:hidden pb-2 border-b border-stone-200/80 dark:border-stone-800">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
            {activeReel.client}
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center gap-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        </div>

        {/* 9:16 Vertical Phone Player */}
        <div className="w-[280px] sm:w-[320px] h-[520px] sm:h-[580px] rounded-[36px] bg-[#292524] p-[8px] shadow-2xl relative flex-shrink-0 border-2 border-stone-800 dark:border-stone-700">
          <div className="w-full h-full rounded-[28px] overflow-hidden relative bg-black flex flex-col justify-between">
            
            {/* Real HTML5 Video element with instant autoPlay */}
            {videoBlobUrl && !videoError ? (
              <video
                ref={videoRef}
                src={videoBlobUrl}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                onTimeUpdate={handleVideoTimeUpdate}
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              /* Fallback Still Image with Video Frame */
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-stone-950/40 pointer-events-none" />

            {/* Top Reel Bar */}
            <div className="relative z-10 p-4 flex items-center justify-between text-white text-xs">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium truncate max-w-[170px]">
                {activeReel.client}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md flex items-center gap-1.5 text-white hover:bg-black/80 transition-colors border border-white/10"
                  title="Toggle sound"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-stone-300" />
                      <span className="text-[10px] text-[#FFB7B2] font-semibold">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#FFB7B2] animate-pulse" />
                      <span className="text-[10px]">Sound On</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Central Play/Pause Tap Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md hover:bg-white/40 flex items-center justify-center text-white transition-all transform hover:scale-105 pointer-events-auto"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1 text-white fill-white" />}
              </button>
            </div>

            {/* Right Side Social Buttons */}
            <div className="absolute right-3 bottom-24 z-10 flex flex-col items-center gap-4 text-white">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md transition-colors ${liked ? 'text-rose-500' : 'text-white'}`}>
                  <Heart className={`w-5 h-5 ${liked ? 'fill-rose-500' : ''}`} />
                </div>
                <span className="text-[10px] font-medium">{liked ? 'Saved' : 'Save'}</span>
              </button>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md text-white">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">{activeReel.views}</span>
              </div>
            </div>

            {/* Live Subtitle Banner inside Video Frame */}
            {currentScene && (
              <div className="relative z-10 px-4 mb-2">
                <div className="bg-black/85 backdrop-blur-xs rounded-xl px-3 py-1.5 text-center border border-white/10">
                  <span className="text-white text-xs font-medium leading-tight block">
                    "{currentScene.subtitle}"
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Details & Progress Bar */}
            <div className="relative z-10 p-4 text-white">
              <div className="pr-12 mb-2">
                <span className="text-[11px] font-mono text-[#FFB7B2] block uppercase tracking-wider">
                  Mobile & Gimbal Video
                </span>
                <p className="text-sm font-semibold leading-snug line-clamp-2">
                  {activeReel.title}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFB7B2] h-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-white/70 mt-1 font-mono">
                <span>{currentTimeStr !== '0:00' ? currentTimeStr : activeReel.duration}</span>
                <span>Video {currentIndex + 1} of {reelItems.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Breakdown with Scene Navigator & Video File Attachment */}
        <div className="flex-1 w-full text-left font-outfit">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono truncate max-w-[200px]">
              {activeReel.client}
            </span>

            {/* Previous / Next Video Switcher */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevVideo}
                className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                title="Previous video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                {currentIndex + 1} / {reelItems.length}
              </span>
              <button
                type="button"
                onClick={handleNextVideo}
                className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                title="Next video"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h3 className="font-outfit text-2xl sm:text-3xl text-[#292524] dark:text-[#F5F5F0] font-normal leading-tight">
            {activeReel.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {activeReel.scriptSummary}
          </p>

          {/* Quick Upload / Attach Local Video Box */}
          <div className="mt-3 p-3 rounded-2xl bg-[#E8EFE8]/70 dark:bg-stone-900/80 border border-stone-200/60 dark:border-stone-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
              <Film className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
              <span>
                {videoBlobUrl && !videoError ? (
                  <strong className="text-emerald-800 dark:text-emerald-300">Playing generated video</strong>
                ) : (
                  <span>Attach .mp4 from iPhone to play directly:</span>
                )}
              </span>
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-1.5 rounded-full bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200 flex items-center gap-1.5 shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
              <span>Attach your .mp4</span>
            </button>
          </div>

          {/* Interactive Scene Flow Steps */}
          {activeReel.scenes && (
            <div className="mt-4 p-3.5 rounded-2xl bg-stone-50 dark:bg-[#151413] border border-stone-200/70 dark:border-stone-800 max-h-36 overflow-y-auto no-scrollbar">
              <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Key Moments & Script Beats
              </p>
              <div className="space-y-1.5">
                {activeReel.scenes.map((scene, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => {
                      setActiveSceneIdx(sIdx);
                      const step = 100 / (activeReel.scenes?.length || 1);
                      const targetPct = sIdx * step;
                      setProgress(targetPct);
                      if (videoRef.current && videoRef.current.duration) {
                        videoRef.current.currentTime = (targetPct / 100) * videoRef.current.duration;
                      }
                    }}
                    className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-start gap-2 cursor-pointer ${
                      sIdx === activeSceneIdx
                        ? 'bg-white dark:bg-stone-800 border border-[#FFB7B2] text-stone-900 dark:text-white shadow-2xs font-medium'
                        : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100/70 dark:hover:bg-stone-800/50'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 mt-0.5">{scene.time}</span>
                    <div className="flex-1">
                      <span className="block font-medium text-stone-800 dark:text-stone-200">{scene.label}</span>
                      <span className="block text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 italic">"{scene.subtitle}"</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#FFE4E1] dark:bg-[#FFB7B2]/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-stone-800 dark:text-[#FFB7B2]">
                <Video className="w-3 h-3" />
              </div>
              <div>
                <strong className="text-stone-900 dark:text-stone-200 font-medium">Video Execution: </strong>
                <span>Smooth gimbal camera movement, natural daylight, and clean audio polish.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-800 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <div>
                <strong className="text-stone-900 dark:text-stone-200 font-medium">Client Result: </strong>
                <span className="text-emerald-950 dark:text-emerald-300 font-medium">{activeReel.campaignOutcome}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`https://wa.me/917799001102?text=Hi%20Gimbells!%20I%20saw%20your%20video%20for%20${encodeURIComponent(activeReel.client)}%20(${encodeURIComponent(activeReel.title)})%20and%20would%20love%20something%20similar%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#292524] hover:bg-stone-800 dark:bg-[#F5F5F0] dark:hover:bg-white dark:text-[#141312] text-white text-xs sm:text-sm font-medium transition-transform active:scale-98 shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#FFB7B2] dark:text-stone-900" />
              <span>Chat on WhatsApp (7799001102)</span>
            </a>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              Inquiries: {activeReel.inquiries}
            </span>
          </div>

          {/* Quick Close Button at the bottom */}
          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/60 flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 underline cursor-pointer"
            >
              Close this video window (ESC)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
