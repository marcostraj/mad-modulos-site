import { useState } from "react";
import HighlightBar from "./highlightBar";
import "./videoSection.css";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="video-container">
        {!isPlaying ? (
          <div className="video-thumbnail-wrapper">
            <img
              src="/src/assets/thumb-video.png"
              alt="Thumbnail do vídeo"
              className="video-thumbnail"
            />
            <button className="play-button" onClick={() => setIsPlaying(true)}></button>
          </div>
        ) : (
          <video className="video-player" controls autoPlay>
            <source src="/videos/apresentacao.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <HighlightBar />
    </section>
  );
};

export default VideoSection;
