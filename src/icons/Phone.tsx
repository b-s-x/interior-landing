import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconPhone = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="M32 26.07c-1.22-1.23-4.18-3.02-5.61-3.75-1.87-.94-2.03-1.01-3.5.08-.98.73-1.63 1.38-2.78 1.13-1.14-.24-3.63-1.62-5.82-3.8-2.18-2.17-3.64-4.74-3.88-5.88-.25-1.14.41-1.79 1.13-2.77 1.02-1.38.94-1.61.07-3.48A25.56 25.56 0 0 0 7.85 2C6.53.7 6.53.92 5.68 1.28c-.7.29-1.36.64-1.99 1.06A5.95 5.95 0 0 0 1.3 4.85c-.48 1.02-.7 3.42 1.78 7.9a39.1 39.1 0 0 0 7.78 10.34 42.57 42.57 0 0 0 10.36 7.75c4.98 2.8 6.9 2.25 7.92 1.77a5.93 5.93 0 0 0 2.52-2.38c.42-.63.77-1.3 1.06-1.99.36-.84.59-.84-.72-2.17Z"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        stroke={props.color}
      />
    </SvgContainer>
  )
}

export default IconPhone;
