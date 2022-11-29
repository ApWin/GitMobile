import React from 'react';
import {TextInput, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = props => {
  let {
    containerStyle,
    style,
    rightText,
    hasLeftText,
    leftTextStyle,
    leftText,
    hasRightText,
    rightTextStyle,
    hasUnderLine,
    hairLineStyle,
    hasErrorMessage,
    form,
    field,
  } = props;
  let error = form && form.touched[field.name] && form.errors[field.name];

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={[styles.wrapper, props.wrapperStyle]}>
        {hasLeftText && <View style={styles.leftIcon}>{leftText}</View>}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#99a1a8"
          {...props}
          value={field.value}
          onChangeText={form.handleChange(field.name)}
          onBlur={form.handleBlur(field.name)}
        />
        {hasRightText && <Text style={rightTextStyle}>{rightText}</Text>}
      </View>
      {hasUnderLine ? (
        <View
          style={[
            styles.hairlineWidth,
            hairLineStyle,
            error ? {backgroundColor: '#D0021B'} : {},
          ]}
        />
      ) : null}
      {hasErrorMessage ? (
        <Text style={styles.errorMessage}>{error}</Text>
      ) : null}
    </View>
  );
};
Input.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  hasErrorMessage: PropTypes.bool,
  hasLeftText: PropTypes.bool,
  hasUnderLine: PropTypes.bool,
  leftTextStyle: PropTypes.object,
  hairLineStyle: PropTypes.object,
  hasRightText: PropTypes.bool,
  rightTextStyle: PropTypes.object,
};
Input.defaultProps = {
  style: {},
  containerStyle: {},
  wrapperStyle: {},
  hairLineStyle: {},
  hasErrorMessage: true,
  hasUnderLine: true,
  hasLeftText: false,
  leftTextStyle: {},
  leftText: '',
  hasRightText: false,
  rightTextStyle: {},
  rightText: '',
};
export default Input;
