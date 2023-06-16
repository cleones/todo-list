import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    fontSize: 16,
    fontFamily: 'Inter_400Regular'
  },
  defaultBorder: {
    borderColor: colors.gray500,
  },
  focusedBorder: {
    borderColor: colors.purpleDark,
  },
  
});
