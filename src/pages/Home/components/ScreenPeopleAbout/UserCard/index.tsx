import { IDataPeopleAboutInfo } from '@/types';
import styles from './UserCard.module.scss';

export const UserCard = ({
  avatar,
  name,
  surname,
  city,
  country,
  content,
}: IDataPeopleAboutInfo) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.user_avatar}>
          <img
            src={avatar}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_name}>
            {`${name} ${surname}`}
          </div>
          <div className={styles.user_place}>
            {`${city}, ${country}`}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {content}
      </div>
    </div>
  )
}