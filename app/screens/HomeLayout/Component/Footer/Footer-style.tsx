import {StyleSheet} from 'react-native';

export const footerStyle = StyleSheet.create({
  component: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  savingComponent: {
    backgroundColor: 'tomato',
  },
  errorComponent: {
    backgroundColor: '#df4759',
  },
  commonSavingComponent: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
