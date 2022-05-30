import styled from "styled-components";
import { SelectedColor } from "src/components/ColorWidget/types";

export const ColorWindowContainer = styled.div``;

export type ColorBoxProps = {
  selectedColor: SelectedColor;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 200px;
  width: 100%;

  ${({ theme }) => `
    border-radius: ${theme.border.primary}
  `};

  ${({ selectedColor, theme }) => {
    /* Render an empty like shape if there is no color selected*/
    if (!selectedColor || selectedColor === "transparent") {
      return `
       border: 1px solid ${theme.colors.black};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 0.8px),
          ${theme.colors.black} 50%,
          rgba(0, 0, 0, 0) calc(50% + 0.8px),
          rgba(0, 0, 0, 0) 100%
        );
      `;
    }

    return `background-color: ${selectedColor};`;
  }}
`;
