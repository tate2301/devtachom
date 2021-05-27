import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    /** Example */
    body: "Inter, sans-serif",
    heading: "Libre Baskerville, serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
    yellow: { 
      ...theme.colors.yellow,
      500: "#ffe01b"
    },
    gray: {
      ...theme.colors.gray,
      100: "#f6f6f4"
    },
    green: {
      ...theme.colors.green,
      100: "#d8eacc"
    },
    blue: {
      ...theme.colors.blue,
      100: "#c5dbf2"
    },
    brand: {
      gray_background: "#f6f6f4"
    }
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
});

export default customTheme;
