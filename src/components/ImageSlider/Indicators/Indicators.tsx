import styles from './Indicators.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IndicatorsProps {
  photosLength: number;
  currentPhotoIndex: number;
}

function Indicators({ photosLength, currentPhotoIndex }: IndicatorsProps) {
  const indicatorsArr: undefined[] = Array.from({ length: photosLength });

  const classIndicator = (index: number) =>
    cx({
      indicator: true,
      current: index === currentPhotoIndex,
    });

  return (
    <ul className={styles.indicators}>
      {indicatorsArr &&
        indicatorsArr.map((_item, index) => (
          <li key={index} className={classIndicator(index)}></li>
        ))}
    </ul>
  );
}

export default Indicators;
