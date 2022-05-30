import styled from "styled-components";
import { SelectedColor } from "src/components/ColorWidget/types";

export const ColorSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 20px);
  gap: 8px;
`;

type ColorBoxProps = {
  colorToRender: SelectedColor;
  selected: boolean;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 20px;
  width: 20px;
  cursor: pointer;

  ${({ colorToRender, selected, theme }) => `
    border: ${selected ? `1px solid ${theme.colors.black}` : "none"};
    background-color: ${colorToRender};
  `}
`;
