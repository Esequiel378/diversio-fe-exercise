import { useColorWidgetProviderContext } from 'src/components/ColorWidget/context';
import { ColorBox, ColorWindowContainer } from './styles';

const ColorWindow = () => {
  const { selectedColor } = useColorWidgetProviderContext();

  return (
    <ColorWindowContainer>
      <ColorBox selectedColor={selectedColor} />
    </ColorWindowContainer>
  );
};

export default ColorWindow;
