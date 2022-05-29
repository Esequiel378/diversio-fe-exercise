import ColorSelector from "./ColorSelector";
import ColorWindow from "./ColorWindow";

import "./index.css";

type ColorWidgetProps = {
  colorList: string[];
};

const ColorWidget = ({ colorList }: ColorWidgetProps) => {
  console.log(colorList);

  return (
    <div className="color-widget">
      <div className="color-widget-title">
        <h2>I am a placeholder</h2>
      </div>
      <div>
        <ColorWindow />
        <ColorSelector />
      </div>
    </div>
  );
};

export default ColorWidget;
