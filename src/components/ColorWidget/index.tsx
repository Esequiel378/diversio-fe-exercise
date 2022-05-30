import ColorSelector, { ColorSelectorProps } from "./ColorSelector";
import ColorWindow from "./ColorWindow";

import { ColorWidgetContainer, ColorWidgetContent, ColorWidgetTitle } from "./styles";

type ColorWidgetProps = ColorSelectorProps & {
  title?: string;
};

const ColorWidget = ({ colors, title = "ColorWidget" }: ColorWidgetProps) => {
  return (
    <ColorWidgetContainer>
      <ColorWidgetTitle>{title}</ColorWidgetTitle>

      <ColorWidgetContent>
        <ColorWindow />
        <ColorSelector colors={colors} />
      </ColorWidgetContent>
    </ColorWidgetContainer>
  );
};

export default ColorWidget;
