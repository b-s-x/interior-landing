import { ScreenMain } from "./components/ScreenMain";
import { ScreenViewMore } from "./components/ScreenViewMore";
import { ScreenInfo } from "./components/ScreenInfo";
import { ScreenPeopleAbout } from "./components/ScreenPeopleAbout";
import { ScreenBrand } from "./components/ScreenBrand";
import { ScreenRecentProject } from "./components/ScreenRecentProject";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div>
      <ScreenMain />
      <ScreenViewMore />
      <ScreenInfo />
      <ScreenPeopleAbout />
      <ScreenBrand />
      <ScreenRecentProject />
    </div>
  )
};
