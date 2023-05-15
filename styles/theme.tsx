import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace`, heading: `'Nunito', sans-serif` };

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config, fonts });

export default theme;
