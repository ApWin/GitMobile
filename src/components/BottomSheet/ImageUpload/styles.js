import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';
import {center, horizontal} from 'assets/styles/common';

export default StyleSheet.create({
  container: {
    ...horizontal,
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.lgray,
  },
  title: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 17,
  },
  line: {
    width: 60,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#E6EAF0',
  },
  buttonCon: {
    alignItems: 'center',
    marginRight: 30,
  },
  button: {
    ...center,
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: colors.lgray,
  },
  text: {
    marginTop: 8,
  },
  bottomSheetContainer: {
    backgroundColor: colors.darkGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 15,
  },
});
