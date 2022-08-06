import IconInterior from '@/icons/Interior';
import { Color } from '@/types/enums';
import styles from './Info.module.scss';

export const Info = () => {
  return (
    <>
      <div className={styles.info}>
        <IconInterior
          color={Color.Gold}
          className={styles.icon}
        />
        <span className={styles.title}>
          Interier
        </span>
      </div>
      <div className={styles.text}>
        We are the leading architect and interior design firm in the world.
      </div>
    </>
  )
}