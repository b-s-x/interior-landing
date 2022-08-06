import { pages } from '@/constants/footer';
import styles from './Pages.module.scss';

export const Pages = () => {
  return (
    <div className={styles.pages}>
      <div className={styles.title}>
        Pages
      </div>
      <div className={styles.link_box}>
        {pages.map(link => {
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