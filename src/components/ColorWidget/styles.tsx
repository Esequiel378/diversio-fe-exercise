import styled from "styled-components";
import { SelectedColor } from "./types";

type ColorWidgetContainerProps = {
  selectedColor: SelectedColor;
};

export const ColorWidgetContainer = styled.div<ColorWidgetContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  transition: all 0.2s ease-in-out;

  ${({ theme, selectedColor }) => `
    background-color: ${theme.colors.darkGrey};
    border: 1px solid ${theme.colors.grey};
    color: ${theme.colors.text};
    border-radius: ${theme.border.primary};

    box-shadow: 0px 0px 8px 2px ${selectedColor};
  `}
`;

export const ColorWidgetTitle = styled.p`
  text-align: center;
`;

export const ColorWidgetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
