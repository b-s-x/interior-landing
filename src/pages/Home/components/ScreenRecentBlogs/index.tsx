import { useEffect, useState } from 'react';
import api from '@/api';
import { IRecentBlogs } from '@/types';
import { RecentBlogCard } from './RecentBlogCard';
import styles from './RecentBlogs.module.scss';

export const ScreenRecentBlogs = () => {
  const [blogs, setBlogs] = useState<IRecentBlogs[]>([]);

  const fetch = async () => {
    const data = await api.home.getRecentBlogs();
    setBlogs(data);
  }

  useEffect(() => {
    try {
      fetch();
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.title}>
          Recent Blogs
        </div>
        <div className={styles.text}>
          Get updates about our latest trends and techniques used in interior design project works.
        </div>
      </div>

      <div className={styles.container_cards}>
        {blogs.map(({
          id,
          category,
          title,
          date,
          img,
        }) => {
          return (
            <RecentBlogCard
              key={id}
              category={category}
              title={title}
              date={date}
              img={img}
            />
          )
        }) }
      </div>
    </div>
  )
}