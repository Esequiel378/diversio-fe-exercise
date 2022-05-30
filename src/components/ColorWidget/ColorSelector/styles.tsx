import styled from "styled-components";

export const ColorSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 20px);
  gap: 8px;
`;

type ColorBoxProps = {
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 20px;
  width: 20px;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;
