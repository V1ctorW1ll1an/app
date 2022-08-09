import { ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import customTheme from "../context/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ColorModeScript
                initialColorMode={customTheme.config.initialColorMode}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
