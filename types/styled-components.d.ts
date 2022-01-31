import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    scrollbarThumb: string;
    text: string;
    textSecondary: string;
    primary: string;
    secondary: string;
    buttonPrimaryHover: string;
    buttonSecondaryHover: string;
    fontFamily: string;
    fontFamilySecondary: string;
    fontSizeXxs: string;
    fontSizeXs: string;
    fontSizeSm: string;
    fontSizeMd: string;
    fontSizeLg: string;
    fontSizeXl: string;
    fontSizeXxl: string;
    fontSizeXxxl: string;
    weightThin: string;
    weightRegular: string;
    weightBold: string;
    weightExtraBold: string;
    transition: string;
  }
}
