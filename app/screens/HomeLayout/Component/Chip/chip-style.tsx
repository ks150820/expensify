import {StyleSheet} from 'react-native';

export const chipStyles = StyleSheet.create({
  component: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconComponent: {
    padding: 3,
    borderRadius: 30 / 2,
    marginRight: 5,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
