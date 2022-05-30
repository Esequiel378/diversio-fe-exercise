import { FC, useEffect } from "react";

import { useColorWidgetProviderContext } from "src/components/ColorWidget/context";
import ColorSelector, { ColorSelectorProps } from "./components/ColorSelector";
import ColorWindow from "./components/ColorWindow";
import ColorWidgetContextProvider from "./context";

import { ColorWidgetContainer, ColorWidgetContent, ColorWidgetTitle } from "./styles";

type ColorWidgetProps = ColorSelectorProps & {
  title?: string;
};

const ColorWidget = ({ colors, title = "ColorWidget" }: ColorWidgetProps) => {
  const { selectedColor } = useColorWidgetProviderContext();

  return (
    <ColorWidgetContainer selectedColor={selectedColor}>
      <ColorWidgetTitle>{title}</ColorWidgetTitle>

      <ColorWidgetContent>
        <ColorWindow />
        <ColorSelector colors={colors} />
      </ColorWidgetContent>
    </ColorWidgetContainer>
  );
};

const ColorWidgetWrapper: FC<ColorWidgetProps> = (props) => (
  <ColorWidgetContextProvider>
    <ColorWidget {...props} />
  </ColorWidgetContextProvider>
);

export default ColorWidgetWrapper;
