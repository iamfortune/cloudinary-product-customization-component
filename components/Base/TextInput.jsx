export const DefaultTextInput = ({ className, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={`${className} default-styled-input`}
      onChange={(e) => (onChange ? onChange(e) : null)}
      placeholder={placeholder || ""}
    />
  );
};
