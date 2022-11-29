import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles';

const Screen = (props) => (
    <SafeAreaView style={[styles.container, props.style]}>
        {props.children}
    </SafeAreaView>
);
Screen.propTypes = {
    style: PropTypes.object
};
Screen.defaultProps = {
    style: {}
};
export default Screen;
