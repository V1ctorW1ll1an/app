import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Flex height="100vh" justifyContent="center" alignItems="center">
            <Flex
                direction="column"
                backgroundColor="gray.700"
                p={12}
                rounded={6}
            ></Flex>
        </Flex>
    );
};

export default Home;
