import ColorSelector from "./ColorSelector";
import ColorWindow from "./ColorWindow";

import { ColorWidgetContainer } from "./styles";

type ColorWidgetProps = {
  colorList: string[];
  title?: string;
};

const ColorWidget = ({ title = "ColorWidget" }: ColorWidgetProps) => {
  return (
    <ColorWidgetContainer>
      <div className="color-widget-title">
        <h2>{title}</h2>
      </div>

      <div>
        <ColorWindow />
        <ColorSelector />
      </div>
    </ColorWidgetContainer>
  );
};

export default ColorWidget;
