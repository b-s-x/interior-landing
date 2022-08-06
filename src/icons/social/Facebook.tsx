import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconFacebook = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="m9.18 10.55.5-3.24H6.55v-2.1c0-.92.42-1.76 1.83-1.76h1.44V.67S8.52.42 7.29.42C4.72.42 3.03 2 3.03 4.82v2.5H.15v3.23h2.88v7.87h3.52v-7.87h2.63Z"
        fill={props.color}
      />
    </SvgContainer>
  )
}

export default IconFacebook;
