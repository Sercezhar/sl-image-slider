import { useState } from 'react';
import styles from './ImageSlider.module.css';
import Indicators from './Indicators';
import MainPhoto from './MainPhoto';
import Navigation from './Navigation';
import { Photo } from './types';

interface ImageSliderProps {
  photos: Photo[];
}

function ImageSlider({ photos }: ImageSliderProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  const prevPhoto = photos[currentPhotoIndex - 1];
  const nextPhoto = photos[currentPhotoIndex + 1];

  return (
    <>
      {photos && (
        <div className={styles.slider}>
          <MainPhoto photos={photos} currentPhotoIndex={currentPhotoIndex} />

          <Navigation
            onPrev={() => setCurrentPhotoIndex(prev => prev - 1)}
            onNext={() => setCurrentPhotoIndex(prev => prev + 1)}
            isPrevDisabled={!prevPhoto}
            isNextDisabled={!nextPhoto}
          />

          <Indicators
            photosLength={photos.length}
            currentPhotoIndex={currentPhotoIndex}
          />
        </div>
      )}
    </>
  );
}

export default ImageSlider;
