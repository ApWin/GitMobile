import {StyleSheet} from 'react-native';
import colors from 'assets/styles/colors';
import {container, center, horizontal} from '../../assets/styles/common';

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: '#E5E5E5',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  searchBar: {
    ...horizontal,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  icon: {
    ...center,
    width: 40,
    height: 40,
  },
  tabs: {
    ...horizontal,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    marginHorizontal: 15,
  },
  tabButton: {
    ...center,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    flex: 1,
  },
  buttonText: {
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  activeText: {
    color: '#fff',
  },
  emptyCon: {
    ...center,
    flex: 1,
    height: 600,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
  },
  emptyText: {
    fontSize: 16,
    color: '#000',
    opacity: 0.6,
  },
  renderItem: {
    ...horizontal,
    backgroundColor: '#fff',
    marginBottom: 1,
    padding: 15,
    borderRadius: 3,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  contentContainerStyle: {
    padding: 15,
  },
  row: {
    ...horizontal,
  },
  repoTitle: {
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginBottom: 7,
    color: '#000',
  },
  repoText: {
    fontSize: 14,
    color: '#000',
  },
  repoOwner: {
    fontSize: 14,
    color: '#000',
  },
});
