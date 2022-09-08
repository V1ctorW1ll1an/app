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

    const { helpText, label, ...rest } = props;

    return (
        <FormControl isInvalid={hasError}>
            <FormLabel>{label ?? ""}</FormLabel>
            <Field
                as={Input}
                name={rest.name}
                placeholder={rest.placeholder}
                {...field} // add events blur, change, etc.
                {...rest} // props from FieldAttributes
            />
            {hasError ? (
                <FormErrorMessage>{textError}</FormErrorMessage>
            ) : (
                <FormHelperText>{helpText ?? ""}</FormHelperText>
            )}
        </FormControl>
    );
};

export default TextField;
