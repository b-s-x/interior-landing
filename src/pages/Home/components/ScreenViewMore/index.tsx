import React, { useEffect, useState } from "react";
import api from "@/api";
import { IDataViewMore }from '@/types';
import { ViewMoreCard } from './ViewMoreCard';
import styles from './ViewMore.module.scss';

export const ScreenViewMore = () => {
  const [dataViewMore, setDataViewMore] = useState<IDataViewMore[]>([]);
  const fetchDataViewMore = async () => {
    const data: IDataViewMore[] = await api.home.getViewMore();
    setDataViewMore(data);
  }

  useEffect(() => {
    try {
      fetchDataViewMore();
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleViewMoreButtonClick = () => console.log('handleViewMoreButtonClick click');

  return (
    <div className={styles.container}>
      {dataViewMore.map(({ id, title, content }) => {
        return (
          <ViewMoreCard
            key={id}
            title={title}
            content={content}
            onClick={handleViewMoreButtonClick}
          />
        )
      })}
    </div>
  )
};
