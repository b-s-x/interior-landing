import { IRecentBlogs } from '@/types';
import IconChevronRight from '@/icons/ChevronRight'
import { Color } from '@/types/enums';
import styles from './RecentBlogCard.module.scss';

interface IRecentBlog extends IRecentBlogs {
  onClick: () => void;
}

export const RecentBlogCard = ({
  category,
  title,
  date,
  img,
  onClick,
}: IRecentBlog) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img
          src={img}
          alt={img}
          className={styles.img}
        />
        <div className={styles.category}>
          {category}
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.date_container}>
        <div className={styles.date}>
          {date}
        </div>
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
  )
}