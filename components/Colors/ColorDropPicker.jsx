import { FaCaretDown } from "react-icons/fa";

export const ColorDropPicker = ({ onChange }) => {
  return (
    <span
      className={`flex flex-row justify-between items-center border border-gray-500 bg-gray-200`}
      style={{ width: 52, padding: `10px auto` }}
    >
      <input
        type={`color`}
        style={{ width: 32, height: 32 }}
        className={`outline-none cursor-pointer`}
        onChange={(e) => onChange(e.currentTarget.value.slice(1))}
        // slice to remove the '#' at the beginning of the hex color code
      />
      <FaCaretDown size={12} />
    </span>
  );
};
