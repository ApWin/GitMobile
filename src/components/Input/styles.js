import { StyleSheet } from 'react-native';
import {center, horizontal} from "../../assets/styles/common";
import colors from 'assets/styles/colors'

export default StyleSheet.create({
    input:{
        height: 55,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#D8E3E8',
        paddingLeft:15,
        paddingRight: 40,
        paddingVertical: 0
    },
    error: {
        borderWidth:1,
        borderColor: colors.red,
        backgroundColor: "#fef5f7"
    },
    active:{
        borderWidth:1,
        borderColor: colors.brandColor
    },
    inputWrapper:{

    },
    close: {
        ...center,
        height: 55,
        position: "absolute",
        right: 0,
        top: 16,
        paddingHorizontal: 12
    },
    errorMessage: {
        fontSize: 12,
        color: '#E66466',
        marginTop: 4,
        alignSelf: "flex-end"
    },
    button: {
        ...center,
        zIndex: 1,
        width: 60,
        height: 55,
        top: 0,
        bottom: 0,
        position: "absolute",
        borderRightWidth: 1,
        borderRightColor: '#D8E3E8'
    },
    buttonText: {

    }
})
