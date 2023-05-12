import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Indicators.module.css';

const cx = classNames.bind(styles);

interface IndicatorsProps {
  photosLength: number;
  currentPhotoIndex: number;
}

const INDICATOR_SIZE: number = 18;

function Indicators({ photosLength, currentPhotoIndex }: IndicatorsProps) {
  const [prevPhotoIndex, setPrevPhotoIndex] = useState<number>(0);
  const [slideBackIndex, setSlideBackIndex] = useState<number>(0);
  const [slideForwardIndex, setSlideForwardIndex] = useState<number>(4);

  const indicatorsRef = useRef<HTMLUListElement | null>(null);
  const indicatorsArr: undefined[] = Array.from({ length: photosLength });

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
        (currentPhotoIndex - 3) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentPhotoIndex - 3);
      setSlideForwardIndex(currentPhotoIndex + 1);
    }

    if (isSlideBack) {
      indicatorsRef.current!.style.transform = `translate3d(-${
        (currentPhotoIndex - 1) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentPhotoIndex - 1);
      if (currentPhotoIndex > 0) {
        setSlideForwardIndex(currentPhotoIndex + 3);
      }
    }

    setPrevPhotoIndex(currentPhotoIndex);
  }, [currentPhotoIndex]);

  return (
    <div className={styles.container}>
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
