import React from 'react'
import {ActivityIndicator, View} from "react-native";
import colors from "assets/styles/colors";
import PropTypes from "prop-types";
import styles from './styles'

const Spinner = (props) => {
    if(props.processing)
        return(
            <View style={styles.spinnerWrapper}>
                <ActivityIndicator
                    color={props.color}
                    animating
                    size={props.size}
                />
            </View>
        );
    else return null
};
Spinner.propTypes = {
    processing: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
};
Spinner.defaultProps = {
    processing: false,
    color: colors.brandColor,
    size: 'small'
};
export default Spinner
