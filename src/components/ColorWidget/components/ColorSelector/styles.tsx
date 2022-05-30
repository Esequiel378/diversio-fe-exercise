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

export const InvalidColorBox = styled.div`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.red};
    border-radius: ${theme.border.primary};
    cursor: not-allowed;
    background:
      linear-gradient(
        to top right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        ${theme.colors.red} 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%);
  `};
`;

export const EmptyColorBox = styled.div`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.border.primary};
    cursor: pointer;
    background:
      linear-gradient(
        to top right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        ${theme.colors.black} 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%);
  `};
`;
