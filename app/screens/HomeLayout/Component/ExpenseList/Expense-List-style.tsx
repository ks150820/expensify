import {StyleSheet} from 'react-native';

export const expenseStyle = StyleSheet.create({
  component: {
    marginTop: '10%',
  },
  listComponent: {
    backgroundColor: '#1e2429',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  emptyBoxComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#e2a4ad',
    padding: 20,
    borderRadius: 10,
  },
  iconComponent: {backgroundColor: '#000', borderRadius: 30, padding: 3},
  iconStyle: {fontSize: 10, color: '#fff'},
  emptyText: {
    textAlign: 'center',
    color: '#000',
  },
});
