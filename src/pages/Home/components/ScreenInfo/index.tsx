import ImgScreenInfo from '@/assets/img/ImageScreenInfo.jpg';
import { PhoneCard } from '@/components/PhoneCard';
import { Button } from '@/components/Button';
import styles from './ScreenInfo.module.scss';

const TITLE = 'We Tackle The Most Challenging Designs';
const TEXT = 'The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.';

export const ScreenInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.content_title}>
          {TITLE}
        </div>
        <div className={styles.content_text}>
          {TEXT}
        </div>
        <div className={styles.content_call}>
          <PhoneCard />
        </div>
        <div className={styles.content_btn}>
          <Button>
            Get Free Estimate
          </Button>
        </div>
      </div>
      <div className={styles.container_img}>
        <img
          src={ImgScreenInfo}
          alt="ImgScreenInfo"
          className={styles.img}
        />
      </div>
    </div>
  )
}