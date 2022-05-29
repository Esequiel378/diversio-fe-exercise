import styled from "styled-components";

export const ColorWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
`;
