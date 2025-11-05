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

    // Observer: detecta quando o vídeo deixa de estar visível
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          // Saiu da tela → muta e pausa som
          videoElement.muted = true;
        }
      },
      { threshold: 0.3 } // 30% visível = ainda conta como "visível"
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
          <source src="video-thumb.mp4" type="video/mp4" />
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
