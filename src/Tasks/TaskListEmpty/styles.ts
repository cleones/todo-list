import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: 'center',
    
    borderTopWidth: 1,
    borderColor: colors.gray400,
    
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  emptyInfo: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyInfoText: {
    color: colors.gray300,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  emptyInfoStrongText: {
    color: colors.gray300,
    fontSize: 14,
    fontFamily: 'Inter_700Bold'
  }
  
});
