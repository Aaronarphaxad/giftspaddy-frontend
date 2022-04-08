import styles from "./VideoComponent.module.css";

// VIDEO/AD COMPONENT

const VideoComponent = ({ youtubeId }) => {
  return (
    <div className={styles.videoCompDiv}>
      <div className={styles.media}>
        {youtubeId && (
          <div className={styles.videoResponsive}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
