import ColorWidget from "src/components/ColorWidget";
import styled from "styled-components";

const COLOR_LIST = [
  "#D7CEE4",
  "#CFB4F7",
  "#6221EA",
  "#0725E8",
  "#B6BFF6",
  "#FEBECD",
  "#FBC02D",
  "#109CF1",
  "#FF2455",
  "#FF8A00",
  "#8F40EB",
  "#AF5EEC",
  "#CA7DEF",
  "#DF9CF3",
  "#F1BCF8",
  "#FFDCFF",
  "#FBC4ED",
  "#F8ABD6",
  "#F591BC",
  "#F1779E",
  "#E95D7E",
  "#DE425B",
  "#FF005B",
  "#FF533B",
  "#FF811D",
  "#FFA600",
];

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

const App = () => (
  <AppContainer>
    <ColorWidget colors={COLOR_LIST} />
  </AppContainer>
);

export default App;
