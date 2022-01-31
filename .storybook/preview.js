import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyle';
import { Normalize } from 'styled-normalize';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Normalize />
      <GlobalStyle />
      <div
        style={{
          width: '100%',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
];
