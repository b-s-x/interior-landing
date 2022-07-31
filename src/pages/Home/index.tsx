import { ScreenMain } from "./components/ScreenMain";
import { ViewMore } from "./components/ViewMore";
import { ScreenInfo } from "./components/ScreenInfo";
import { ScreenPeopleAbout } from "./components/ScreenPeopleAbout";
import { ScreenBrand } from "./components/ScreenBrand";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div>
      <ScreenMain />
      <ViewMore />
      <ScreenInfo />
      <ScreenPeopleAbout />
      <ScreenBrand />
    </div>
  )
};
