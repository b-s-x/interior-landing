import { useState, useEffect } from 'react';
import { getWidth } from '@/utils/dom';

export const useCurrentWidth = (): number => {
  let [width, setWidth] = useState(getWidth());
  useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, [])

  return width;
}
