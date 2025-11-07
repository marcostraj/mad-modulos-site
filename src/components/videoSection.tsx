import { useRef, useEffect, useState } from "react";
import HighlightBar from "./highlightBar";
import "./videoSection.css";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !video.muted;

    video.muted = newMuted;
    video.volume = newMuted ? 0 : 1;

    if (!newMuted) {
      try {
        await video.play();
      } catch (err) {
      }
    }

    setIsMuted(newMuted);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          videoElement.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src="video-thumb.mp4" type="video/mp4" />
        </video>

        <button className="sound-button" onClick={toggleSound} aria-pressed={!isMuted}>
          {isMuted ? <img src="sound-icon-on.svg" alt="" /> : <img src="sound-icon-off.svg" alt="" />}
        </button>
      </div>

      <HighlightBar />
    </section>
  );
};

export default VideoSection;
