import { Image } from '../types';
import styles from './MainImage.module.css';

interface MainImageProps {
  images: Image[];
  currentImageIndex: number;
}

function MainImage({ images, currentImageIndex }: MainImageProps) {
  function handleCurrentDataset(index: number) {
    const prevImageIndex = currentImageIndex - 1;
    const nextImageIndex = currentImageIndex + 1;

    if (prevImageIndex === index || nextImageIndex === index) {
      return 'prepared';
    }

    if (currentImageIndex === index) {
      return 'true';
    }

    return 'false';
  }

  return (
    <div className={styles.mainImage}>
      {images.map((image, index) => (
        <img
          key={index}
          className={styles.image}
          data-current={handleCurrentDataset(index)}
          src={image.src}
          alt={image.description}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default MainImage;
