import styles from './RecentProject.module.scss';
import api from '@/api';
import { IRecentProjects } from '@/types';
import { RecentProjectCard } from './RecentProjectCard';
import { useEffect, useState } from 'react';

export const ScreenRecentProject = () => {
  const [recentProjects, setRecentProjects] = useState<IRecentProjects[]>([]);
  const fetch = async () => {
    const data: IRecentProjects[] = await api.home.getRecentProjects();
    setRecentProjects(data);
  }

  useEffect(() => {
    try {
      fetch();
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleClick = (id: number | undefined) => console.log('click', id);

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.content_title}>
          Recent Projects
        </div>
        <div className={styles.content_text}>
          With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.
        </div>
      </div>

      <div className={styles.cards}>
        {recentProjects.map(({
          id,
          img,
          category,
          name,
        }) => {
          return (
            <RecentProjectCard
              key={id}
              img={img}
              category={category}
              name={name}
              onClick={() => handleClick(id)}
            />
          )
        })}
      </div>
    </div>
  );
}