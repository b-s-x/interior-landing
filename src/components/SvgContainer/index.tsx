interface IIcon {
  height: string | number
  width: string | number
  color: string
  className: string
  style: any
  viewBox: string
  children: React.ReactNode
}

const SvgContainer = ({
  width,
  height,
  color,
  className,
  style,
  viewBox,
  children,
}: IIcon ) => {
  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      width={`${width}px`}
      height={`${height}px`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

SvgContainer.defaultProps = {
  width: 34,
  height: 34,
  color: "#000000",
  viewBox: null,
  style: {},
  className: "",
};

export default SvgContainer;