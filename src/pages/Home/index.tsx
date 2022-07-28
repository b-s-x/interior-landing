import React from "react";
import ImgMain from '@/assets/img/main.svg';
import Button from '@/components/Button';
import styles from './Home.module.scss';

export const Home = () => {
  const handleClick = () => console.log('Get Startedbutton click');

  return (
    <div>
      <div className={styles.img_container}>
        <img
          src={ImgMain}
          alt="ImgMain"
          className={styles.img}
        />

        <div className={styles.content_container}>
          <div className={styles.content_top}>
            Let's Create Your Dream Interior
          </div>
          <div className={styles.content_bottom}>
            The world needs innovators and problem solvers who turn challenges into greater opportunities.
          </div>

          <Button
            className={styles.btn}
            handleClick={handleClick}
          >
            Get Started
          </Button>
        </div>

      </div>
    </div>
  )
};
