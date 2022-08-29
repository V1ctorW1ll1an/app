import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import TextField from "./TextField";

export interface FormValues {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [passwordType, setPasswordType] = useState("password");
    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};
        if (!values.email) {
            errors.email = "Campo obrigatório.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Endereço de email inválido.";
        }
        return errors;
    };
    return (
        <>
            <VStack padding={8} width="100%">
                <Heading color="purple.900">Login</Heading>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validate={validate}
                >
                    {(props) => (
                        <Form className="w-full">
                            <VStack spacing={4} width="100%">
                                <TextField
                                    name="email"
                                    placeholder="email"
                                    label="Email"
                                    type="email"
                                    helpText="Nunca compartilharemos seu e-mail."
                                />
                                <Box position="relative" width="100%">
                                    <TextField
                                        name="password"
                                        placeholder="senha"
                                        label="Senha"
                                        type={passwordType}
                                    />
                                    <Text
                                        position="absolute"
                                        right={2}
                                        top={10}
                                        userSelect="none"
                                        color="blue.500"
                                        fontSize="sm"
                                        cursor="pointer"
                                        decoration="underline"
                                        onClick={() => {
                                            setPasswordType(
                                                passwordType === "password"
                                                    ? "text"
                                                    : "password"
                                            );
                                        }}
                                    >
                                        Mostrar
                                    </Text>
                                </Box>
                                <Button
                                    mt={4}
                                    bg="purple.900"
                                    _hover={{ background: "purple.800" }}
                                    color="white"
                                    isLoading={props.isSubmitting}
                                    type="submit"
                                    width="100%"
                                    padding={6}
                                >
                                    Entrar
                                </Button>
                            </VStack>
                        </Form>
                    )}
                </Formik>
            </VStack>
        </>
    );
};

export default LoginForm;
