import { Photo } from '../types';
import styles from './MainPhoto.module.css';

interface MainPhotoProps {
  photos: Photo[];
  currentPhotoIndex: number;
}

function MainPhoto({ photos, currentPhotoIndex }: MainPhotoProps) {
  function handleCurrentDataset(index: number) {
    const prevPhotoIndex = currentPhotoIndex - 1;
    const nextPhotoIndex = currentPhotoIndex + 1;

    if (prevPhotoIndex === index || nextPhotoIndex === index) {
      return 'prepared';
    }

    if (currentPhotoIndex === index) {
      return 'true';
    }

    return 'false';
  }

  return (
    <div className={styles.mainPhoto}>
      {photos.map((photo, index) => (
        <img
          key={index}
          className={styles.photo}
          data-current={handleCurrentDataset(index)}
          src={photo.src}
          alt={photo.description}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default MainPhoto;
