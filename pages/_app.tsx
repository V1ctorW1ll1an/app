import { ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../context/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
