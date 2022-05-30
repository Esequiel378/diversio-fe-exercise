import { ColorBox, ColorSelectorContainer } from "./styles";

export type ColorSelectorProps = {
  colors: string[];
};

const ColorSelector = ({ colors }: ColorSelectorProps) => {
  return (
    <ColorSelectorContainer>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
