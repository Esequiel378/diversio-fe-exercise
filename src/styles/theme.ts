export type ThemeProps = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    black: string;
    white: string;
    text: string;
    grey: string;
    darkGrey: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  border: {
    primary: string;
  };
};

const theme: ThemeProps = {
  colors: {
    primary: '#BD6979',
    secondary: '#ED8C71',
    accent: '#FFBE66',
    black: '#0d0c0c',
    white: '#ebe6e6',
    text: '#f2f2f2',
    grey: '#8f8f8f',
    darkGrey: '#4a4a49',
  },
  background: {
    primary: '#453C53',
    secondary: '#7F5270',
  },
  border: {
    primary: '6px',
  },
} as const;

export default theme;
