import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';
import {center, horizontal} from 'assets/styles/common';

export default StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 17,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.lgray,
  },
  dateStyle: {
    width: 250,
    alignSelf: 'center',
    height: 170,
    marginTop: 20,
  },
  bottomSheetContainer: {
    backgroundColor: colors.darkGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 15,
  },
  buttons: {
    ...horizontal,
    justifyContent: 'space-between',
  },
  btn: {
    width: '47%',
  },
  btn1: {
    backgroundColor: colors.lgray,
  },
});
