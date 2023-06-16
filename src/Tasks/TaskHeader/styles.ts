import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    marginBottom: 20
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  count: {
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    
    borderRadius: 999
  },
  countText: {
    color: colors.gray200,
  },
  createdText: {
    color: colors.blue,
    fontFamily: 'Inter_700Bold'
  },
  doneText: {
    color: colors.purple,
    fontFamily: 'Inter_700Bold'
  }
});
