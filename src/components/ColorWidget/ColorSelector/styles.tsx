import styled from "styled-components";

export const ColorSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;
`;

type ColorBoxProps = {
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 20px;
  width: 20px;
  margin: 5px 5px 0 0;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;
