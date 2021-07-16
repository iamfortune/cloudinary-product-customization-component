import { useState } from "react";
import { ColorPickerSquare } from "./ColorPickerSquare";

/**
 * Renders an array of 'ColorPickerSquare's
 * @param { Array<object> } colorsArray           | an array of strings containing data for each ColorPickerSquare to be rendered
 * @param { String } elementClassName       | a string of CSS classes to apply to EACH ColorPickerSquare
 * @param { Array<Number> } isFluid         | array of width and height to be used instead of the defaults;
 *                                            this also allows each ColorPickerSquare to auto-resize to contain children elements
 * @param { String } elementClassName       | a string of CSS classes to apply to EACH ColorPickerSquare
 * @returns { Instanceof ReactElement }
 */

export const ColorPickerArray = ({
  colorsArray,
  elementClassName,
  isFluid,
  onSelect
}) => {
  // SET INDEX OBJECT TO AUTO-FOCUSED
  const [focusedSquare, setFocusedSquare] = useState(0);

  return (
    <div className={`flex flex-row`}>
      {colorsArray.map((color, index) => (
        <ColorPickerSquare
          key={color.id}
          isFocused={index === focusedSquare}
          onClick={(e) => setFocusedSquare(index)}
          color={color}
          onSelect={(e) => (onSelect ? onSelect(e, index) : null)}
          className={elementClassName}
          isFluid={isFluid}
        />
      ))}
    </div>
  );
};
