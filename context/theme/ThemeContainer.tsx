import React from "react";
import {
    ColorModeProvider,
    CSSReset,
    ThemeProvider as ChakraThemeProvider,
} from "@chakra-ui/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "../../styles/theme";

type Props = {
    children: React.ReactNode;
};

export const ThemeContainer: React.FC<Props> = ({ children }) => {
    return (
        <ChakraThemeProvider theme={{ theme }}>
            <ColorModeProvider value="dark">
                <EmotionThemeProvider theme={{ theme }}>
                    <CSSReset></CSSReset>
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    );
};
