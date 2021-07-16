export const FontPicker = ({ fonts, className, onChange, value }) => {
  const renderOptionElements = () =>
    fonts.map((font) => (
      <option
        key={font.id}
        value={font.value}
        selected={font.selected}
        hidden={font.hidden}
      >
        {font.title}
      </option>
    ));

  return (
    <select
      key={className.id}
      className={className}
      onChange={(e) => (onChange ? onChange(e) : null)}
      value={value}
    >
      {renderOptionElements()}
    </select>
  );
};
