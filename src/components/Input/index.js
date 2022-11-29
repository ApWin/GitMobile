import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ClearIcon from 'assets/images/Icon/ClearIcon';
import colors from 'assets/styles/colors'
import get from 'lodash/get'

let refInput = null;
const Input = (props) => {
    const [isFocused, setFocus] = useState(false);

    let error = props.form && props.form.errors[props.field.name] && props.form.touched[props.field.name];
    const value = get(props, `field.value`, "");


    return(
        <View style={[
            styles.inputWrapper
        ]}>
            {
                props.leftPrefix ? (
                    <TouchableOpacity style={[
                        styles.button,
                        props.inputStyle,
                    ]} disabled={!props.onPrefixPressed} onPress={props.onPrefixPressed}>
                        <Text style={styles.buttonText}>
                            {props.leftPrefix}
                        </Text>
                    </TouchableOpacity>
                ) : null
            }
            <TextInput
                ref={(r)=>{ refInput = r }}
                style={[
                    styles.input,
                    props.inputStyle,
                    isFocused ? styles.active : {},
                    error ? styles.error : {},
                    props.leftPrefix ? { paddingLeft: 70 } : {}
                ]}
                onFocus={() =>{
                    setFocus(true)
                }}
                onBlur={(e) => {
                    setFocus(false);
                    props.form.setFieldTouched(props.field.name, true)
                }}
                {...props}
                value={props.field.value}
                onChangeText={(text)=>{
                    if(props.handleChange)
                        props.handleChange(props.field.name, text)
                    else {
                        props.form.setFieldValue(props.field.name, text)
                    }
                }}
            />
            {
                props.showErrorText ? (
                    <Text style={styles.errorMessage}>
                        {error ? props.form.errors[props.field.name] : ""}
                    </Text>
                ) : null
            }
            {
                value ? (
                    <TouchableOpacity onPress={()=>{
                        if(value){
                            props.form.setFieldValue(props.field.name, "")
                        }
                    }} style={styles.close} >
                        <ClearIcon width={25} height={25} color={error ? colors.red : "#8F92A1"}/>
                    </TouchableOpacity>
                ) : null
            }
        </View>
    )
};
Input.propTypes={
    inputStyle: PropTypes.object
};
Input.defaultProps={
    inputStyle: {},
    handleChange: null,
    showErrorText: true,
    leftPrefix: "",
    onPrefixPressed: null
};

export default Input;

