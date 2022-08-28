import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Field, FieldAttributes, useField } from "formik";
export interface TextFieldProps {
    label: string;
    helpText?: string;
}
const TextField: React.FC<FieldAttributes<{}> & TextFieldProps> = (props) => {
    const [field, meta] = useField<{}>(props);
    const textError = meta.error && meta.touched ? meta.error : "";
    const hasError = !!textError;

    return (
        <FormControl isInvalid={hasError}>
            <FormLabel>{props.label ?? ""}</FormLabel>
            <Field
                as={Input}
                name={props.name}
                placeholder={props.placeholder}
                {...field} // add events blur, change, etc.
                {...props} // props from FieldAttributes
            />
            {hasError ? (
                <FormErrorMessage>{textError}</FormErrorMessage>
            ) : (
                <FormHelperText>{props.helpText}</FormHelperText>
            )}
        </FormControl>
    );
};

export default TextField;
