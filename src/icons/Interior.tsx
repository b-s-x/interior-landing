import SvgContainer from '@/components/SvgContainer';

interface IIcon {
  height?: string | number
  width?: string | number
  color?: string
  className?: string
  style?: any
  viewBox?: string
}

const IconInterior = (props: IIcon) => {
  return (
    <SvgContainer { ...props }>
      <path
        d="M0 34h13.46v-9.5a3.64 3.64 0 117.29 0V34H34V0A34 34 0 000 34z"
      />
    </SvgContainer>
  )
}

export default IconInterior;
