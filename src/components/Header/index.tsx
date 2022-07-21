import InteriorIcon from '@/icons/Interior';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <InteriorIcon
          className={styles.icon_interior}
        />
        <span className={styles.header_title}>
          Interior
        </span>
      </div>

      <Navbar />
    </div>
  )
}

export default Header;
