import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    yellow: {
      light: '#FFE094',
      default: '#FFD369',
      dark: '#FFC029',
    },
    gray: {
      light: '#EEEEEE',
      light_dark: '#838a96',
      default: '#393E46',
      dark: '#222831',
    },
    green: {
      forest: '#228B22',
      lime: '#32CD32',
    },
    blue: {
      baby: '#89CFF0',
      bright: '#0096FF'
    }
  },
});

export default theme;