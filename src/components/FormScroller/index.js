import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const FormScroller = (props) => (
    <KeyboardAwareScrollView
        keyboardShouldPersistTaps={props.keyboardShouldPersistTaps}
        enableOnAndroid={props.enableOnAndroid}
        contentContainerStyle={[
            styles.container,
            props.style
        ]}
    >
        {props.children}
    </KeyboardAwareScrollView>
);
FormScroller.propTypes = {
    style: PropTypes.object,
    enableOnAndroid: PropTypes.bool,
    keyboardShouldPersistTaps: PropTypes.string
};
FormScroller.defaultProps = {
    style: {},
    enableOnAndroid: false,
    keyboardShouldPersistTaps: "handled"
};
export default FormScroller;
