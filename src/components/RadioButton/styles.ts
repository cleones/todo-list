import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 999,
    
  },
  unchecked: {
    borderColor: colors.blue
  },
  checked: {
    borderColor: colors.purple,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
