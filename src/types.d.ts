import { ThemeProps as CThemeProps } from "src/styles/theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends CThemeProps {}
}
