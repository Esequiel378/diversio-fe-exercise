import 'styled-components';

import { ThemeProps as CThemeProps } from 'src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CThemeProps {}
}
