import { IDataViewMore }from '@/types';
import IconArrowRight from '@/icons/ArrowRight';
import { Color } from '@/types/enums';
import styles from './ViewMoreCard.module.scss';

interface IViewMoreCard extends IDataViewMore {
  onClick: () => void,
}

export const ViewMoreCard = ({ title, content, onClick }: IViewMoreCard)  => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.content}>
        {content}
      </div>

      <button
        className={styles.btn}
        onClick={onClick}
      >
        <span>
          View More
        </span>
        <IconArrowRight
          width={22}
          height={16}
          color={Color.Gold}
        />
      </button>
    </div>
  )
}