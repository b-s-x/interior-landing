import { contact } from '@/constants/footer';
import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        Contact
      </div>

      <div className={styles.text}>
        <div> {contact.address} </div>
        <div> {contact.mail} </div>
        <div> {contact.phone} </div>
      </div>
    </div>
  )
}