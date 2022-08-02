import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconChevronRight = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="M1.77 14.69 7.71 8 1.77 1.31"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={props.color}
      />
    </SvgContainer>
  )
}

export default IconChevronRight;
