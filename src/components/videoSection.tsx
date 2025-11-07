import { useRef, useEffect } from "react";
import HighlightBar from "./highlightBar";
import "./videoSection.css";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const enableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          videoElement.muted = true;
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
          muted
          playsInline
        >
          <source src="/src/assets/video-thumb.mp4" type="video/mp4" />
        </video>

        <button className="sound-button" onClick={enableSound}>
          🔊 
        </button>
      </div>

      <HighlightBar />
    </section>
  );
};

export default VideoSection;
