import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconArrowRight = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="m1.53 7.93 17.33-.14M12.41 1.4l8.24 6.53-8.4 6.65"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
        stroke={props.color}
      />
    </SvgContainer>
  )
}

export default IconArrowRight;
