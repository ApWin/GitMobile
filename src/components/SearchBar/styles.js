import { StyleSheet } from 'react-native';
import {horizontal} from "assets/styles/common";
import colors from "assets/styles/colors";

export default StyleSheet.create({
    container: {

    },
    wrapper: {
        ...horizontal,
        borderWidth: 0.3,
        height: 49,
        borderColor: '#979797',
        backgroundColor: '#E9E9EC',
        marginHorizontal: 8,
        marginTop: 8,
        borderRadius: 10,
        paddingHorizontal: 11,
    },
    textInput: {
        color: '#8C929F',
        paddingVertical: 0,
        marginLeft: 8,
        // marginVertical: 11,
        width: '83.5%',
        fontSize: 14,
        fontFamily:'SFProDisplay-Regular'
    },
    close: {
        paddingVertical: 12,
        alignItems: "center",
        width: 40
    }
});
