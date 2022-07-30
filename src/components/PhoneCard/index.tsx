import styles from './PhoneCard.module.scss';
import IconPhone from '@/icons/Phone';
import { Color } from '@/types/enums';

export const PhoneCard = () => {
  return (
    <div className={styles.container}>
      <span className={styles.around}>
        <IconPhone
          width={34}
          height={34}
          color={Color.Gold}
        />
      </span>

      <div className={styles.content}>
        <div>
          012345678
        </div>
        <div>
          Call Us Anytime
        </div>
      </div>
    </div>
  )
}