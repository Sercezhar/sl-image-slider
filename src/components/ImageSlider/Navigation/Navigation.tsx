import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Navigation.module.css';

const cx = classNames.bind(styles);

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

function Navigation({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: NavigationProps) {
  const classButtonPrev = cx('button', 'prev');
  const classButtonNext = cx('button', 'next');

  return (
    <div>
      <button
        className={classButtonPrev}
        type="button"
        disabled={isPrevDisabled}
        onClick={onPrev}
      >
        <IoIosArrowBack className={styles.icon} />
      </button>

      <button
        className={classButtonNext}
        type="button"
        disabled={isNextDisabled}
        onClick={onNext}
      >
        <IoIosArrowForward className={styles.icon} />
      </button>
    </div>
  );
}

export default Navigation;
