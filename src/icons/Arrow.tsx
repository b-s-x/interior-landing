import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconArrow = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="m2 20 24-1M17.2 2 28 19.8 17 38"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
        stroke={props.color}
      />
    </SvgContainer>
  )
}

export default IconArrow;
