// theme.ts

// 1. import `extendTheme` function
import { theme, extendTheme, type ThemeConfig } from "@chakra-ui/react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const tailwind = resolveConfig(tailwindConfig);

// @ts-ignore
theme.colors.blue = tailwind?.theme?.colors?.blue;

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const fontWeights = {
    ...theme.fontWeights,
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 600,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};

const fonts = {
    heading: "Roboto, system-ui, sans-serif",
    body: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
};

const radii = {
    none: "0",
    sm: "5px",
    base: "0.25rem",
    md: "8px",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
};

const fontSizes = {
    ...theme.fontSizes,
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "54px",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
};

const colors = {
    ...theme.colors,
    blue: {
        ...theme.colors.blue,
        50: theme.colors.gray[50],
        100: theme.colors.gray[100],
    },
    darkBlue: {
        ...theme.colors.blue,
        50: theme.colors.gray[50],
        500: theme.colors.blue[800],
        600: theme.colors.blue[700],
        700: theme.colors.blue[800],
        800: theme.colors.blue[900],
        900: theme.colors.blue[900],
    },
    purple: {
        ...theme.colors.purple,
        500: "#8257e5",
    },
    gray: {
        ...theme.colors.gray,
        300: "#e1e1e6",
        600: "#29292e",
        700: "#202024",
        800: "#121214",
    },
};

// 3. extend the theme
const customTheme = extendTheme({
    config,
    fonts,
    fontWeights,
    radii,
    fontSizes,
    colors,
});

export default customTheme;
