import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
    const imgSrc = "/assets/images/bg.jpeg";
    return (
        <>
            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                userSelect="none"
            >
                <Image
                    display={{ base: "block", md: "none" }}
                    width="100%"
                    objectFit="cover"
                    alt="background"
                    src={imgSrc}
                />
                <Image
                    display={{ base: "none", md: "block" }}
                    height="100vh"
                    width="100%"
                    objectFit="cover"
                    alt="background"
                    src={imgSrc}
                    opacity={0.5}
                />
                <Text
                    position="absolute"
                    color="white"
                    display={{ base: "block", md: "none" }}
                    paddingX={4}
                    textAlign="center"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ultricies mi pharetra tortor lacinia, vel semper
                    sapien vulputate. Mauris pretium in quam ut rhoncus.
                </Text>
            </Box>
            <Box display={{ base: "block", md: "none" }}>
                <LoginForm></LoginForm>
            </Box>
            <Box
                position="absolute"
                display={{ base: "none", md: "flex" }}
                alignItems="center"
                top={0}
                left={0}
                height="100%"
                width="100%"
                justifyContent="center"
            >
                <HStack
                    height="425px"
                    width="100%"
                    maxWidth="940px"
                    margin={10}
                    zIndex={10}
                    backgroundColor="white"
                    rounded="lg"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        position="relative"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt="background"
                            src={imgSrc}
                        ></Image>
                        <Text
                            position="absolute"
                            color="white"
                            paddingX={4}
                            textAlign="center"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam ultricies mi pharetra tortor lacinia,
                            vel semper sapien vulputate. Mauris pretium in quam
                            ut rhoncus.
                        </Text>
                    </Flex>
                    <Flex width="100%" height="100%">
                        <LoginForm></LoginForm>
                    </Flex>
                </HStack>
            </Box>
        </>
    );
};

export default Login;
