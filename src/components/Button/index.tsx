import IconArrow from '@/icons/Arrow';
import { Color } from '@/types/enums';
import styles from './Button.module.scss';

interface IBtn {
  children?: React.ReactNode
  color?: Color
  iconColor?: Color
  className?: string
  onClick?: () => void
}

export const Button = ({ children, color, iconColor, className, onClick }: IBtn) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      style={{ 'backgroundColor': color || Color.Black }}
      onClick={onClick}
    >
      <div className={styles.btn_title}>
        {children}
      </div>

      <IconArrow
        width={29}
        height={40}
        color={iconColor || Color.Gold}
        className={styles.btn_icon}
      />
    </button>
  )
};

export default Button;