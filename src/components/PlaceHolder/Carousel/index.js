import React from 'react'
import {View} from 'react-native'
import Placeholder, { Line, Box } from "rn-placeholder";
import PropTypes from 'prop-types';
import styles from './styles'

const Carousel = (props) => (
    <View style={[
        styles.container,
        props.style
    ]}>
        <Placeholder
            isReady={false}
            animation="fade"
        >
            <Box hasRadius color={"#E6EAF0"} style={styles.image}>
                <Line color={"#c1c1c2"} width="70%" />
                <Line color={"#c1c1c2"} width="80%" />
            </Box>
        </Placeholder>
    </View>
);
Carousel.propTypes = {

};
Carousel.defaultProps = {
    style: {}
};
export default Carousel
