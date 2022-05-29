import { ColorBox, ColorSelectorContainer } from "./styles";

const ColorSelector = () => {
  return (
    <ColorSelectorContainer>
      <ColorBox color="red" />
      <ColorBox color="orange" />
      <ColorBox color="yellow" />
      <ColorBox color="green" />
      <ColorBox color="blue" />
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
