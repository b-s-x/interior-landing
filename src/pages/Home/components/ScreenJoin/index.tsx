import { Button } from '@/components/Button';
import { Color } from '@/types/enums';
import styles from './Join.module.scss';

export const ScreenJoin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Wanna join the interno?
      </div>
      <div className={styles.text}>
        Contact Us & Get a Free Consultation
      </div>

      <Button
        color={Color.Gold}
        iconColor={Color.Black}
      >
        Connect With us
      </Button>
    </div>
  )
}