import React from 'react';
import PropTypes from 'prop-types';

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import colors from "../../assets/styles/colors";

const Input = (props) => {
    const {
        field,
        form: { errors, touched, handleBlur, handleChange },
    } = props;
    let error = props.form && touched[field.name] && errors[field.name];

    const textFieldProps = {
        error,
        contentInset: {
            top: 4,
            // label: 4,
            // input: 8,
            // left: 0,
            // right: 0,
        },
        ...props,
        value: field.value,
        onChangeText: handleChange(field.name),
        onBlur: handleBlur(field.name),
        textColor:'black',
        tintColor:colors.brandColor,
        baseColor:'#99a1a8',
        placeholderTextColor:'#99a1a8'
    };
    switch (props.type){
        case "textField":
            return (
                <TextField
                    {...textFieldProps}
                />
            );
        case "filledTextField":
            return (
                <FilledTextField
                    {...textFieldProps}
                />
            );
        case "outlinedTextField":
            return (
                <OutlinedTextField
                    {...textFieldProps}
                />
            );
        default:
            return null
    }
};
Input.propTypes = {
    style: PropTypes.object,
    type: PropTypes.oneOf([ 'textField', 'filledTextField', 'outlinedTextField']),
};
Input.defaultProps = {
    style: {},
    type: "textField"
};
export default Input;

//style: Text.propType
