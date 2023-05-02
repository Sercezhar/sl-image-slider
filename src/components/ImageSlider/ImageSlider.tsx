import { useState } from 'react';
import styles from './ImageSlider.module.css';
import MainPhoto from './MainPhoto';
import Navigation from './Navigation';
import { Photo } from './types';

interface ImageSliderProps {
  photos: Photo[];
}

function ImageSlider({ photos }: ImageSliderProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const currentPhoto = photos[currentPhotoIndex];
  const prevPhoto = photos[currentPhotoIndex - 1];
  const nextPhoto = photos[currentPhotoIndex + 1];

  return (
    <>
      {photos && (
        <div className={styles.slider}>
          <div className={styles.container}>
            <MainPhoto
              currentPhoto={currentPhoto}
              prevPhoto={prevPhoto}
              nextPhoto={nextPhoto}
            />

            <Navigation
              onPrev={() => setCurrentPhotoIndex(prev => prev - 1)}
              onNext={() => setCurrentPhotoIndex(prev => prev + 1)}
              isPrevDisabled={!prevPhoto}
              isNextDisabled={!nextPhoto}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
