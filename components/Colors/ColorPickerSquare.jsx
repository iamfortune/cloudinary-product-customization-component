export const ColorPickerSquare = ({
  color,
  onSelect,
  className,
  isFluid,
  isFocused,
  onClick
}) => {
  const squareImage = `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:${color}:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg`;

  return (
    <div
      className={`${
        isFocused && "border-2 border-gray-500"
      } transition duration-300 cursor-pointer ${className} ${
        color === "white" || color === "ffffff"
          ? "border border-gray-500"
          : null
      }`}
      style={{
        backgroundColor: color ?? "transparent",
        width: !isFluid ? 32 : `auto`,
        height: !isFluid ? 32 : `auto`,
        backgroundImage: `url('${squareImage}')`,
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
