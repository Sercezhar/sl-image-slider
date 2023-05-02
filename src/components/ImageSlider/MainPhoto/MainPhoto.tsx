import { Photo } from '../types';
import styles from './MainPhoto.module.css';

interface MainPhotoProps {
  currentPhoto: Photo;
  prevPhoto: Photo;
  nextPhoto: Photo;
}

function MainPhoto({ currentPhoto, prevPhoto, nextPhoto }: MainPhotoProps) {
  return (
    <div className={styles.mainPhoto}>
      {prevPhoto && (
        <img
          className={styles.prev}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}

      <img
        className={styles.current}
        src={currentPhoto.src}
        alt={currentPhoto.description}
      />

      {nextPhoto && (
        <img
          className={styles.next}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
}

export default MainPhoto;
