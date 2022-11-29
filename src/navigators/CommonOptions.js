import { TransitionPresets } from '@react-navigation/stack';
import colors from 'assets/styles/colors';

let commonOptions = {
    gestureEnabled: true,
    headerShown: false,
    headerTintColor: colors.primary,
    ...TransitionPresets.SlideFromRightIOS,
};

export default commonOptions
