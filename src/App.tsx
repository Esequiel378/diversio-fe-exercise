import styled from 'styled-components';

import { useGetColors } from 'src/api/colors';
import ColorWidget from 'src/components/ColorWidget';

const AppContainer = styled.div`
  width: 100wh;
  height: 100vh;

  /* Center the content */
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    320deg,
    hsl(263deg 16% 28%) 0%,
    hsl(290deg 17% 33%) 1%,
    hsl(316deg 20% 39%) 3%,
    hsl(332deg 25% 46%) 7%,
    hsl(344deg 32% 54%) 13%,
    hsl(355deg 44% 61%) 21%,
    hsl(6deg 61% 66%) 31%,
    hsl(16deg 79% 68%) 45%,
    hsl(25deg 93% 70%) 63%,
    hsl(35deg 100% 70%) 94%
  );
`;

const App = () => {
  const { data: colors } = useGetColors();

  return (
    <AppContainer>
      <ColorWidget colors={colors} />
    </AppContainer>
  );
};

export default App;
