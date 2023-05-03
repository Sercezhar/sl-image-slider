import classNames from 'classnames/bind';
import { Photo } from '../types';
import styles from './MainPhoto.module.css';

const cx = classNames.bind(styles);

interface MainPhotoProps {
  currentPhoto: Photo;
  prevPhoto?: Photo;
  nextPhoto?: Photo;
}

function MainPhoto({ currentPhoto, prevPhoto, nextPhoto }: MainPhotoProps) {
  const classPrevPhoto = cx('photo', 'prev');
  const classNextPhoto = cx('photo', 'next');

  return (
    <div className={styles.mainPhoto}>
      {prevPhoto && (
        <img
          className={classPrevPhoto}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}

      <img
        className={styles.photo}
        src={currentPhoto.src}
        alt={currentPhoto.description}
      />

      {nextPhoto && (
        <img
          className={classNextPhoto}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
}

export default MainPhoto;
