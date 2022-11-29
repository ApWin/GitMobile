import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'

const isAndroid = (Platform.OS === 'android');

const Button = (props) => {

    const _renderChildren = () => {
        let childElements = [];
        React.Children.forEach(props.children, (item) => {
            if (typeof item === 'string' || typeof item === 'number') {
                const element = (
                    <Text
                        style={[styles.textButton, props.textStyle]}
                        allowFontScaling={props.allowFontScaling}
                        key={item}>
                        {item}
                    </Text>
                );
                childElements.push(element);
            } else if (React.isValidElement(item)) {
                childElements.push(item);
            }
        });
        return (childElements);
    };

    const _renderInnerText = () => {
        if (props.isLoading) {
            return (
                <ActivityIndicator
                    animating={true}
                    size='small'
                    style={styles.spinner}
                    color={props.activityIndicatorColor || 'white'}
                />
            );
        }
        return _renderChildren();
    };

    if (props.isDisabled === true || props.isLoading === true) {
        return (
            <View style={[styles.button, props.style, (props.disabledStyle || styles.opacity)]}>
                {_renderInnerText()}
            </View>
        );
    }
    // Extract Touchable props
    let touchableProps = {
        testID: props.testID,
        accessibilityLabel: props.accessibilityLabel,
        onPress: props.onPress,
        onPressIn: props.onPressIn,
        onPressOut: props.onPressOut,
        onLongPress: props.onLongPress,
        activeOpacity: props.activeOpacity,
        delayLongPress: props.delayLongPress,
        delayPressIn: props.delayPressIn,
        delayPressOut: props.delayPressOut,
    };
    if (isAndroid) {
        touchableProps = Object.assign(touchableProps, {
            background: props.background || TouchableNativeFeedback.SelectableBackground()
        });
        return (
            <TouchableNativeFeedback {...touchableProps}>
                <View style={[styles.button, props.style]}>
                    {_renderInnerText()}
                </View>
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <TouchableOpacity
                {...touchableProps}
                style={[
                    styles.button,
                    props.style
                ]}
            >
                {_renderInnerText()}
            </TouchableOpacity>
        );
    }
};
Button.propTypes = {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
    ]),
    testID: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    delayLongPress: PropTypes.number,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
};
Button.defaultProps = {

};
export default Button;

