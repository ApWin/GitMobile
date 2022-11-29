import { StyleSheet } from  'react-native';
import { center } from 'assets/styles/common'
import colors from "assets/styles/colors";

export default StyleSheet.create({
    button: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.brandColor,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    textButton: {
        flex: 1,
        color: colors.white,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    spinner: {
        alignSelf: 'center',
    },
    opacity: {
        opacity: 0.5,
    },
});
