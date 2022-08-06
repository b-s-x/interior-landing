import { explore } from '@/constants/footer';
import styles from './Explore.module.scss';

export const Explore = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.title}>
        Explore
      </div>
      <div className={styles.link_box}>
        {explore.map(link => {
          return (
            <div className={styles.link}>
              {link}
            </div>
          )
        })}
      </div>
    </div>
  )
}