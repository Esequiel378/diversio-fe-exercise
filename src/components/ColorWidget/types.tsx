import { Dispatch, SetStateAction } from "react";

export type SelectedColor = string | null;

export type ColorWidgetData = {
  selectedColor: SelectedColor;
  setSelectedColor: Dispatch<SetStateAction<SelectedColor>>;
};
