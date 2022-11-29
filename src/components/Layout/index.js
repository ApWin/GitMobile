import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles';

const Screen = (props) => (
    <View style={[styles.container, props.style]}>
        {props.children}
    </View>
);
Screen.propTypes = {
    style: PropTypes.object
};
Screen.defaultProps = {
    style: {}
};
export default Screen;
