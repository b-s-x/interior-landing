import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconTwitter = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="M16.14 3.77a7.82 7.82 0 0 0 1.82-1.9c-.63.28-1.37.49-2.1.56A3.6 3.6 0 0 0 17.47.39a7.8 7.8 0 0 1-2.32.91 3.7 3.7 0 0 0-6.3 3.38A10.71 10.71 0 0 1 1.24.81a3.6 3.6 0 0 0-.5 1.87c0 1.26.64 2.39 1.66 3.05A3.9 3.9 0 0 1 .7 5.28v.03a3.7 3.7 0 0 0 2.96 3.62c-.29.07-.64.14-.95.14-.25 0-.46-.03-.7-.07a3.67 3.67 0 0 0 3.44 2.57 7.42 7.42 0 0 1-4.57 1.58c-.32 0-.6-.03-.88-.07a10.29 10.29 0 0 0 5.66 1.65c6.79 0 10.48-5.59 10.48-10.47v-.5Z"
        fill={props.color}
      />
    </SvgContainer>
  )
}

export default IconTwitter;
