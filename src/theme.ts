import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "-webkit-linear-gradient(top left, #4f36b7, #ea25c5); -moz-linear-gradient(top left, #4f36b7, #ea25c5); linear-gradient(to bottom right, #4f36b7, #ea25c5)",
        color: "gray.50",
      },
    },
  },
});
