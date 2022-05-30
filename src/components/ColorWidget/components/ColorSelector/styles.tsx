import styled from 'styled-components';

import { SelectedColor } from 'src/components/ColorWidget/types';

const COLOR_BOX_SIZE = '30px';

export const ColorSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${COLOR_BOX_SIZE});
  gap: 8px;
`;

type ColorBoxProps = {
  colorToRender: SelectedColor;
  selected: boolean;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: ${COLOR_BOX_SIZE};
  width: ${COLOR_BOX_SIZE};
  cursor: pointer;

  ${({ colorToRender, selected, theme }) => `
    border: 2px solid ${theme.colors.darkGrey};
    border-radius: ${theme.border.primary};
    background-color: ${colorToRender};

    ${selected && `border-color: rgb(0, 146, 255);`}
  `}

  &:hover {
    transform: scale(1.1);
  }
`;
