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
  imagesLength: number;
  currentImageIndex: number;
}

function Indicators({ imagesLength, currentImageIndex }: IndicatorsProps) {
  const [prevImageIndex, setPrevImageIndex] = useState<number>(0);
  const [slideBackIndex, setSlideBackIndex] = useState<number>(0);
  const [slideForwardIndex, setSlideForwardIndex] = useState<number>(
    VISIBLE_INDICATORS - 1
  );

  const indicatorsRef = useRef<HTMLUListElement | null>(null);
  const indicatorsArr: undefined[] = Array.from({ length: imagesLength });

  useEffect(() => {
    const isSlideForward: boolean =
      currentImageIndex === slideForwardIndex &&
      prevImageIndex < currentImageIndex &&
      currentImageIndex !== imagesLength - 1;

    const isSlideBack: boolean =
      prevImageIndex > currentImageIndex &&
      currentImageIndex === slideBackIndex;

    if (isSlideForward) {
      indicatorsRef.current!.style.transform = `translate3d(-${
        (currentImageIndex - MAIN_INDICATORS) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentImageIndex - MAIN_INDICATORS);
      setSlideForwardIndex(currentImageIndex + 1);
    }

    if (isSlideBack) {
      indicatorsRef.current!.style.transform = `translate3d(-${
        (currentImageIndex - 1) * INDICATOR_SIZE
      }px, 0, 0)`;

      setSlideBackIndex(currentImageIndex - 1);
      if (currentImageIndex > 0) {
        setSlideForwardIndex(currentImageIndex + MAIN_INDICATORS);
      }
    }

    setPrevImageIndex(currentImageIndex);
  }, [currentImageIndex]);

  const classIndicator = (index: number) => {
    const isSmall: boolean =
      (index > 0 && index === slideBackIndex) ||
      (index === slideForwardIndex && index !== imagesLength - 1);
    const isHidden: boolean =
      index < slideBackIndex || index > slideForwardIndex;

    return cx({
      indicator: true,
      current: index === currentImageIndex,
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
