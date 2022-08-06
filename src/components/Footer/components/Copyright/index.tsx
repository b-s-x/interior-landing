import styles from './Copyright.module.scss';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      Copyright © Interier | Designed by
      <span className={styles.gold}>
        Victorflow
      </span>
    </div>
  )
}