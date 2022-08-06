import styles from './Copyright.module.scss';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      Copyright © Interno | Designed by
      <span className={styles.gold}>
        Victorflow
      </span>
      Templates - Powered by
      <span className={styles.gold}>
        Webflow
      </span>
    </div>
  )
}