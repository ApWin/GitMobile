import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Colors from 'assets/styles/colors'
import FastImage from 'react-native-fast-image'

const getAvatar = (username) => {
    const userName = username || '';
    const name = userName.toUpperCase().split(' ');
    let avatarName = "";
    let avatarColor;
    if (name.length === 1) {
        avatarName = `${name[0].charAt(0)}`;
    }
    else if (name.length > 1) {
        avatarName = `${name[0].charAt(0)}${name[1].charAt(0)}`;
    }
    else {
        avatarName = '';
    }
    let sumChars = 0;
    for (let i = 0; i < userName.length; i += 1) {
        sumChars += userName.charCodeAt(i);
    }
    const colors = [
        Colors.carrot,
        Colors.emerald,
        Colors.peterRiver,
        Colors.wisteria,
        Colors.alizarin,
        Colors.turquoise,
        Colors.midnightBlue,
    ];
    avatarColor = colors[sumChars % colors.length];

    return { avatarColor, avatarName }
};

const ImageView = (props) => {
    const [loading, setValue] = useState(false);
    const [error, setError] = useState(false);
    let avatar = {};

    let defaultSource = props.defaultSource;

    if(!props.defaultSource)
        defaultSource = require('./defaultImage.jpg');

    let src = defaultSource;

    if(props.uri)
        src = {uri: props.uri};

    else {
        if(props.username)
            avatar = getAvatar(props.username);
    }
    if(error)
        src = defaultSource;

    return(
        <View style={[
            styles.container,
            props.containerStyle
        ]}>
            <View style={[
                styles.wrapper,
                props.wrapperStyle
            ]}>

                {
                    props.username && !props.uri ? (
                        <View
                            style={[
                                styles.avatarStyle,
                                props.style,
                                { backgroundColor: avatar.avatarColor }
                            ]}
                        >
                            <Text
                                style={[
                                    styles.textStyle,
                                    props.textStyle
                                ]}
                            >
                                {avatar.avatarName}
                            </Text>
                        </View>
                    ) : (
                        <FastImage
                            style={[
                                styles.image,
                                props.style
                            ]}
                            source={src}
                            resizeMode={FastImage.resizeMode.cover}
                            onLoadStart={() => {
                                if(props.showPreloader)
                                setValue(true)
                            }}
                            onLoadEnd={() => {
                                if(props.showPreloader)
                                setValue(false)
                            }}
                            onError={() => setError(true)}
                        />
                    )
                }
                {props.children}
                {
                    (props.showPreloader && loading) || props.loading ? (
                        <View style={styles.spinner}>
                            <ActivityIndicator
                                color={props.preloaderColor}
                                size={props.preloaderSize}
                            />
                        </View>
                    ) : null
                }
            </View>
        </View>
    )
};
ImageView.propTypes = {
    uri: PropTypes.string,
    style: PropTypes.object,
    preloaderSize: PropTypes.oneOf(['small', 'large'])
};
ImageView.defaultProps = {
    uri: '',
    style: {},
    showPreloader: false,
    preloaderColor: "#008CFF",
    username: "",
    textStyle: {},
    preloaderSize: 'small',
    loading: false,
    containerStyle: {},
    wrapperStyle: {}
};
export default React.memo(ImageView);
