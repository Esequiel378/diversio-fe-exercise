import { useEffect } from 'react';

import { useColorWidgetProviderContext } from 'src/components/ColorWidget/context';
import { isValidCSSColor } from 'src/utils/helpers';
import { SelectedColor } from '../../types';
import { ColorBox, ColorSelectorContainer, EmptyColorBox, InvalidColorBox } from './styles';

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
      {colors.map((color, index) =>
        isValidCSSColor(color ?? '') ? (
          <ColorBox
            key={index}
            colorToRender={color}
            selected={color === selectedColor}
            onClick={() => setSelectedColor(color)}
          />
        ) : (
          <InvalidColorBox />
        )
      )}
      <EmptyColorBox onClick={() => setSelectedColor('')} />
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
