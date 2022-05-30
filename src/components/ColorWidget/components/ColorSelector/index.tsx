import { useEffect } from "react";
import { useColorWidgetProviderContext } from "src/components/ColorWidget/context";
import { SelectedColor } from "../../types";
import { ColorBox, ColorSelectorContainer } from "./styles";

export type ColorSelectorProps = {
  colors: SelectedColor[];
};

const ColorSelector = ({ colors }: ColorSelectorProps) => {
  const { selectedColor, setSelectedColor } = useColorWidgetProviderContext();

  useEffect(() => {
    setSelectedColor(colors[0]);
  }, [colors, setSelectedColor]);

  return (
    <ColorSelectorContainer>
      {colors.map((color, index) => (
        <ColorBox
          key={index}
          colorToRender={color}
          selected={color === selectedColor}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
