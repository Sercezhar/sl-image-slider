import { Photo } from '../types';
import styles from './MainPhoto.module.css';

interface MainPhotoProps {
  photos: Photo[];
  currentPhotoIndex: number;
}

function MainPhoto({ photos, currentPhotoIndex }: MainPhotoProps) {
  return (
    <div className={styles.mainPhoto}>
      {photos.map((photo, index) => (
        <img
          key={index}
          className={styles.photo}
          data-current={index === currentPhotoIndex}
          src={photo.src}
          alt={photo.description}
        />
      ))}
    </div>
  );
}

export default MainPhoto;
