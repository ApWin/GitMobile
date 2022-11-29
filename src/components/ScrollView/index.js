import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Scroller = (props) => (
    <ScrollView
        style={[styles.container, props.style]}
        {...props}
    >
        {props.children}
    </ScrollView>
);
Scroller.propTypes = {
    style: PropTypes.object
};
Scroller.defaultProps = {
    style: {}
};
export default Scroller;