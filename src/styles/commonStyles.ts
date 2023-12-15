import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listStyle: {
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
