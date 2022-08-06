import SvgContainer from '@/components/SvgContainer';
import { IIcon } from '@/types';

const IconLinkedIn = (props: IIcon) => {
  return (
    <SvgContainer {...props}>
      <path
        d="M3.64 16.17V5.66H.37v10.51h3.27ZM2 4.25c1.05 0 1.9-.88 1.9-1.93a1.88 1.88 0 0 0-3.77 0C.13 3.38.97 4.25 2 4.25Zm13.85 11.92h.04v-5.76c0-2.82-.64-5-3.94-5a3.5 3.5 0 0 0-3.1 1.7h-.03V5.65H5.68v10.51h3.27v-5.2c0-1.37.25-2.67 1.93-2.67 1.69 0 1.73 1.54 1.73 2.77v5.1h3.23Z"
        fill={props.color}
      />
    </SvgContainer>
  )
}

export default IconLinkedIn;
