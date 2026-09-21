import "./VideoPage.css";

function VideoPage() {
  return (
    <div className="video-page">
      <div className="loading-overlay">
        <div className="unlock-icon"></div>
        <div className="loading-container">
          <span>Verbindung wird hergestellt...</span>
          <div className="progress-bar">
            <div className="progress-bar-text">0%</div>
            <div className="progress-bar-fill" />
          </div>
        </div>
      </div>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoPage;
