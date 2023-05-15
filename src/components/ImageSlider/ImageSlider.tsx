import { useState } from 'react';
import styles from './ImageSlider.module.css';
import Indicators from './Indicators';
import MainImage from './MainImage';
import Navigation from './Navigation';
import { Image } from './types';

interface ImageSliderProps {
  images: Image[];
}

function ImageSlider({ images }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const prevImage = images[currentImageIndex - 1];
  const nextImage = images[currentImageIndex + 1];

  return (
    <>
      {images.length > 0 && (
        <div className={styles.slider}>
          <MainImage images={images} currentImageIndex={currentImageIndex} />

          <Navigation
            onPrev={() => setCurrentImageIndex(prev => prev - 1)}
            onNext={() => setCurrentImageIndex(prev => prev + 1)}
            isPrevDisabled={!prevImage}
            isNextDisabled={!nextImage}
          />

          <Indicators
            imagesLength={images.length}
            currentImageIndex={currentImageIndex}
          />
        </div>
      )}
    </>
  );
}

export default ImageSlider;
