import styles from './Hamburger.module.scss';

export const Hamburger = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={`${styles.burger} ${ isActive && styles.burger_active }`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default Hamburger;