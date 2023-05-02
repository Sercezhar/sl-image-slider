import styles from './Indicators.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IndicatorsProps {
  photosLength: number;
  currentPhotoIndex: number;
}

function Indicators({ photosLength, currentPhotoIndex }: IndicatorsProps) {
  const indicatorsArr = [...Array(photosLength)].map((_el, index) => index);

  const classIndicator = (index: number) =>
    cx({
      indicator: true,
      current: index === currentPhotoIndex,
    });

  return (
    <ul className={styles.indicators}>
      {indicatorsArr &&
        indicatorsArr.map((item, index) => (
          <li className={classIndicator(index)} key={item}></li>
        ))}
    </ul>
  );
}

export default Indicators;
