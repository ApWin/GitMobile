import {Platform, StyleSheet} from 'react-native';
import {center, horizontal} from 'assets/styles/common';

const platform = Platform.OS;

export default StyleSheet.create({
    hairlineWidth: {
        height: 1,
        marginTop: platform === 'ios' ? 10 : 0,
        backgroundColor: '#EAEBEE'
    },
    containerStyle: {

    },
    wrapper: {
      ...horizontal,
        borderBottomWidth:1,
        borderColor:'rgba(151,151,151,39)',
        height: 60,
    },
    input: {
        width: "80%",
        fontSize: 16,
        fontFamily:'SFProDisplay-Regular',
    },
    errorMessage: {
        fontSize: 12,
        color: '#E66466',
        marginVertical: 4
    },
    leftIcon:{
        marginLeft:9,
        marginRight:12
    },

});
