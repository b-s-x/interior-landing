import { IRecentProjects } from '@/types';
import IconChevronRight from '@/icons/ChevronRight'
import { Color } from '@/types/enums';
import styles from './RecentProjectCard.module.scss';

interface IRecentProjectsCard extends IRecentProjects {
  onClick?: () => void
}

export const RecentProjectCard = ({
  img,
  category,
  name,
  onClick,
}: IRecentProjectsCard) => {
  return (
    <div className={styles.card}>
      <img
        src={img}
        alt={name}
        className={styles.img}
      />

      <div className={styles.content}>
        <div>
          <div className={styles.content_title}>
            {name}
          </div>
          <div className={styles.content_category}>
            {category}
          </div>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={onClick}
          >
            <IconChevronRight
              height={16}
              width={9}
              color={Color.Black}
            />
          </button>
        </div>
      </div>
    </div>
  )
}