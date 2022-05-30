import styled from "styled-components";

export const ColorWindowContainer = styled.div``;

export type ColorBoxProps = {
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 200px;
  width: 100%;

  background-color: ${({ color }) => color};
`;
