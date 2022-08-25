import { Box, Image } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Box>
            <Image
                display={{ base: "block", md: "none" }}
                width="100%"
                objectFit="cover"
                alt="background"
                src="/assets/images/bg.jpeg"
            />
            <Image
                display={{ base: "none", md: "block" }}
                height="100vh"
                width="100%"
                objectFit="cover"
                alt="background"
                src="/assets/images/bg.jpeg"
                opacity={0.5}
            />
        </Box>
    );
};

export default Home;
