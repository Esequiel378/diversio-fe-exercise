import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ColorWidgetData, SelectedColor } from "./types";

export const ColorWidgetContext = createContext<ColorWidgetData>({} as ColorWidgetData);

const ColorWidgetContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState<SelectedColor>("transparent");

  const value: ColorWidgetData = {
    selectedColor,
    setSelectedColor,
  };

  return (
    <ColorWidgetContext.Provider value={value}>{children}</ColorWidgetContext.Provider>
  );
};

export default ColorWidgetContextProvider;

export const useColorWidgetProviderContext = () =>
  useContext<ColorWidgetData>(ColorWidgetContext);
