import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Texts = props => {
  let {children, size, style} = props;
  return (
    <Text {...props} style={[styles.text, {fontSize: size}, style]}>
      {children}
    </Text>
  );
};

Texts.defaultProps = {
  size: 14,
  children: '',
  style: {},
};

export default Texts;
