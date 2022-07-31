import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import { IDataPeopleAboutInfo } from '@/types';
import api from "@/api";
import styles from './PeopleAbout.module.scss';

export const ScreenPeopleAbout = () => {
  const [dataPeopleAboutInfo, setDataPeopleAboutInfo] = useState<IDataPeopleAboutInfo[]>([]);
  const fetchDataViewMore = async () => {
    const data: IDataPeopleAboutInfo[] = await api.home.getPeopleAboutInfo();
    setDataPeopleAboutInfo(data);
  }

  useEffect(() => {
    try {
      fetchDataViewMore();
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        What the People Thinks About Interier
      </div>

      <div className={styles.cards}>
        {dataPeopleAboutInfo.map(({
          id,
          avatar,
          name,
          surname,
          city,
          country,
          content,
        }) => {
          return (
            <UserCard
              key={id}
              avatar={avatar}
              name={name}
              surname={surname}
              city={city}
              country={country}
              content={content}
            />
          )
        })}
      </div>
    </div>
  )
}