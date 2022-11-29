import {StyleSheet} from 'react-native';
import {
  center,
  horizontal,
  horizontalCenter,
  verticalCenter,
} from 'assets/styles/common';
import colors from 'assets/styles/colors';

export default StyleSheet.create({
  container: {
    ...horizontal,
    paddingLeft: 11,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  headerWithTitle: {
    ...horizontal,
  },
  title: {
    width: '84%',
    fontSize: 16,
    color: '#1D1D1D',
    marginLeft: 10,
    textAlign: 'left',
  },
  iconWrapper: {
    width: 40,
    height: 38,
    borderRadius: 8,
    ...verticalCenter,
  },
  empty: {
    width: 38,
    height: 38,
  },
  right: {
    paddingRight: 11,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 38,
    height: 38,
  },
  centerIcon: {
    ...center,
    padding: 7,
    marginRight: 11,
  },
  favorite: {
    marginRight: 15,
  },
  favoriteCenter: {
    marginLeft: 45,
  },
});
