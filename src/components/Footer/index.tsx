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
      <div className={styles.container}>
        <div>
          <Info />
          <Social />
        </div>
        <Pages />
        <Explore />
        <Contact />
      </div>
      <Copyright />
    </>
  )
}