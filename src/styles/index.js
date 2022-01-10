import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  default: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#FFFFFFDD',
  },
  container: {
    flex: 1,
  },
  containerMargin: {
    flex: 1,
    width: '94%',
    marginHorizontal: '3%',
    marginVertical: '3%',
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyMessageStyle: {
    textAlign: 'center',
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});