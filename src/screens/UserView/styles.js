import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';
import {container, center, horizontal} from '../../assets/styles/common';

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: '#E5E5E5',
  },
  contentContainerStyle: {
    padding: 15,
  },
  header: {
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  row: {
    ...horizontal,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
  description: {},
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  button: {
    ...horizontal,
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
  },
  additionalStyle:{
    marginTop:15
  }
});
