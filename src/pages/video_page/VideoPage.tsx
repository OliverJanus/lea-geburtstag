import "./VideoPage.css";

function VideoPage() {
  return (
    <div className="video-page">
      <div className="video-container">
        {/* <video controls>
          <source src="test.mp4" type="video/mp4" />
        </video> */}
        <iframe src="https://drive.google.com/file/d/1DE9nOFyRu4Ps9o2Emggo29XkLL-PQGF6/preview" />
      </div>
      <div className="loading-overlay">
        <div className="unlock-icon">
          <img src="checkmark.gif" alt="Unlock Icon" />
        </div>
        <div className="loading-container">
          <span>Verbindung wird hergestellt...</span>
          <div className="progress-bar">
            <div className="progress-bar-text" />
            <div className="progress-bar-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
