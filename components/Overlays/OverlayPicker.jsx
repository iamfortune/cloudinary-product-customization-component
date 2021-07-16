export const OverlayPickerSquare = ({
  onSelect,
  className,
  isFluid,
  isFocused,
  onClick,
  image
}) => {
  return (
    <div
      className={`${
        isFocused && "border-2 border-gray-500"
      } transition duration-300 cursor-pointer ${className}`}
      style={{
        width: !isFluid ? 32 : `auto`,
        height: !isFluid ? 32 : `auto`,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        minWidth: !isFluid ? 32 : isFluid[0],
        minHeight: !isFluid ? 32 : isFluid[1]
      }}
      onClick={(e) => {
        onSelect ? onSelect(e) : null;
        onClick ? onClick(e) : null;
      }}
    >
      &nbsp;
    </div>
  );
};
