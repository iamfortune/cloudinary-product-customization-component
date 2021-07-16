import { useState } from "react";
import { OverlayPickerSquare } from "./OverlayPicker";

export const OverlayPickerArray = ({
  overlaysArray,
  elementClassName,
  isFluid,
  onSelect
}) => {
  // SET INDEX OBJECT TO AUTO-FOCUSED
  const [focusedSquare, setFocusedSquare] = useState(0);

  return (
    <div className={`flex flex-row`}>
      {overlaysArray.map((overlay, index) => (
        <OverlayPickerSquare
          isFocused={index === focusedSquare}
          onClick={(e) => setFocusedSquare(index)}
          onSelect={(e) => (onSelect ? onSelect(e, overlay.overlay) : null)}
          className={elementClassName}
          isFluid={isFluid}
          image={overlay.image}
        />
      ))}
    </div>
  );
};
