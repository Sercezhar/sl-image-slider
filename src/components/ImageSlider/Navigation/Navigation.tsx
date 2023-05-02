import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Navigation.module.css';

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
  return (
    <div>
      <button
        className={styles.buttonPrev}
        type="button"
        disabled={isPrevDisabled}
        onClick={onPrev}
      >
        <IoIosArrowBack className={styles.arrowIcon} />
      </button>

      <button
        className={styles.buttonNext}
        type="button"
        disabled={isNextDisabled}
        onClick={onNext}
      >
        <IoIosArrowForward className={styles.arrowIcon} />
      </button>
    </div>
  );
}

export default Navigation;
