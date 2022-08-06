import IconInstagram from '@/icons/social/Instagram'
import IconFacebook from '@/icons/social/Facebook';
import IconTwitter from '@/icons/social/Twitter';
import IconLinkedIn from '@/icons/social/LinkedIn';
import styles from './Social.module.scss';

export const Social = () => {
  return (
    <div className={styles.container}>
      <IconFacebook
        width={10}
        height={19}
        className={styles.icon}
      />
      <IconTwitter
        width={18}
        height={15}
        className={styles.icon}
      />
      <IconLinkedIn
        width={16}
        height={17}
        className={styles.icon}
      />
      <IconInstagram
        width={17}
        height={18}
        className={styles.icon}
      />
    </div>
  )
}