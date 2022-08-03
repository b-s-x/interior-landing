import styles from './Achievements.module.scss';

export const ScreenAchievements = () => {
  return (
    <div className={styles.field}>
      <div className={styles.field_box}>
        <div className={styles.top}>
          12
        </div>
        <div className={styles.bottom}>
          Years Of Experiance
        </div>
      </div>
      <div className={styles.field_box}>
        <div className={styles.top}>
          5K
        </div>
        <div className={styles.bottom}>
          Success Project
        </div>
      </div>
      <div className={styles.field_box}>
        <div className={styles.top}>
          1K
        </div>
        <div className={styles.bottom}>
          Active Project
        </div>
      </div>
      <div className={styles.field_box}>
        <div className={styles.top}>
          4K
        </div>
        <div className={styles.bottom}>
          Happy Customers
        </div>
      </div>
    </div>
  )
};
