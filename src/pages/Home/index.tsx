import { ScreenMain } from "./components/ScreenMain";
import { ScreenViewMore } from "./components/ScreenViewMore";
import { ScreenInfo } from "./components/ScreenInfo";
import { ScreenPeopleAbout } from "./components/ScreenPeopleAbout";
import { ScreenBrand } from "./components/ScreenBrand";
import { ScreenRecentProject } from "./components/ScreenRecentProject";
import { ScreenAchievements } from "./components/ScreenAchievements";
import { ScreenRecentBlogs } from "./components/ScreenRecentBlogs";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <ScreenMain />
      <ScreenViewMore />
      <ScreenInfo />
      <ScreenPeopleAbout />
      <ScreenBrand />
      <ScreenRecentProject />
      <ScreenAchievements />
      <ScreenRecentBlogs />
    </>
  )
};
