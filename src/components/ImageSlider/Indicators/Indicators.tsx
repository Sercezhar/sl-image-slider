import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Indicators.module.css';
import {
  CONTAINER_WIDTH,
  INDICATOR_SIZE,
  MAIN_INDICATORS,
  VISIBLE_INDICATORS,
} from './constants';

const cx = classNames.bind(styles);

interface IndicatorsProps {
  photosLength: number;
  currentPhotoIndex: number;
}

function Indicators({ photosLength, currentPhotoIndex }: IndicatorsProps) {
  const [prevPhotoIndex, setPrevPhotoIndex] = useState<number>(0);
  const [slideBackIndex, setSlideBackIndex] = useState<number>(0);
  const [slideForwardIndex, setSlideForwardIndex] = useState<number>(
    VISIBLE_INDICATORS - 1
  );

  const indicatorsRef = useRef<HTMLUListElement | null>(null);
  const indicatorsArr: undefined[] = Array.from({ length: photosLength });

  useEffect(() => {
    const isSlideForward: boolean =
      currentPhotoIndex === slideForwardIndex &&
      prevPhotoIndex < currentPhotoIndex &&
      currentPhotoIndex !== photosLength - 1;

    const isSlideBack: boolean =
      prevPhotoIndex > currentPhotoIndex &&
      currentPhotoIndex === slideBackIndex;

    if (isSlideForward) {
      indicatorsRef.current!.style.transform = `translate3d(-${
        (currentPhotoIndex - MAIN_INDICATORS) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentPhotoIndex - MAIN_INDICATORS);
      setSlideForwardIndex(currentPhotoIndex + 1);
    }

    if (isSlideBack) {
      indicatorsRef.current!.style.transform = `translate3d(-${
        (currentPhotoIndex - 1) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentPhotoIndex - 1);
      if (currentPhotoIndex > 0) {
        setSlideForwardIndex(currentPhotoIndex + MAIN_INDICATORS);
      }
    }

    setPrevPhotoIndex(currentPhotoIndex);
  }, [currentPhotoIndex]);

  const classIndicator = (index: number) => {
    const isSmall: boolean =
      (index > 0 && index === slideBackIndex) ||
      (index === slideForwardIndex && index !== photosLength - 1);
    const isHidden: boolean =
      index < slideBackIndex || index > slideForwardIndex;

    return cx({
      indicator: true,
      current: index === currentPhotoIndex,
      small: isSmall,
      hidden: isHidden,
    });
  };

  return (
    <div
      className={styles.container}
      style={{ maxWidth: `${CONTAINER_WIDTH}px` }}
    >
      <ul ref={indicatorsRef} className={styles.indicators}>
        {indicatorsArr &&
          indicatorsArr.map((_item, index) => (
            <li key={index} className={classIndicator(index)}></li>
          ))}
      </ul>
    </div>
  );
}

export default Indicators;
