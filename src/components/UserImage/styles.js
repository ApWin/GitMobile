import { StyleSheet } from 'react-native';
import {center, horizontal} from "assets/styles/common";
import colors from 'assets/styles/colors'

export default StyleSheet.create({
    container: {
        ...horizontal
    },
    wrapper: {

    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    avatarStyle: {
        ...center,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    spinner: {
        ...center,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    textStyle: {
        color: colors.white,
        fontSize: 16,
        backgroundColor: "transparent",
        fontWeight: '100',
    }
});
