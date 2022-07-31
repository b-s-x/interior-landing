import styles from './ScreenBrand.module.scss';
import BrandLogo from '@/assets/brand/BrandLogo.svg';
import ClassicLogo from '@/assets/brand/ClassicLogo.svg';
import ModernHomeLogo from '@/assets/brand/ModernHomeLogo.svg';
import NatureHomeLogo from '@/assets/brand/NatureHomeLogo.svg';
import StyleVintageInteriorLogo from '@/assets/brand/StyleVintageInteriorLogo.svg';

const BRANDS = [
  ModernHomeLogo,
  StyleVintageInteriorLogo,
  BrandLogo,
  NatureHomeLogo,
  ClassicLogo,
];

export const ScreenBrand = () => {
  return (
    <div className={styles.container}>
      {BRANDS.map(brand => {
        return (
          <img
            src={brand}
            alt={brand}
            key={brand}
            className={styles.img}
          />
        )
      })}
    </div>
  )
}