import styled from "styled-components";

export const ColorWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  border-radius: 6px;

  ${({ theme }) => `
    background-color: ${theme.colors.darkGrey};
    border: 1px solid ${theme.colors.grey};
    color: ${theme.colors.text};
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
