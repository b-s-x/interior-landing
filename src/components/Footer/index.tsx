import { Info } from './components/Info';
import { Social } from './components/Social';
import { Pages } from './components/Pages';
import { Explore } from './components/Explore';
import { Contact } from './components/Contact';
import { Copyright } from './components/Copyright';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <Info />
          <Social />
        </div>
        <div className={styles.footer_links}>
          <Pages />
          <Explore />
        </div>
        <Contact />
      </div>
      <Copyright />
    </>
  )
}