import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: colors.gray500,
    
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  
  description: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    flex: 1,
    marginLeft: 2,
    textAlign: 'left',
  },
  defaultDescription: {
    color: colors.gray100,
   
  },
  doneDescription: {
    color: colors.gray300,
   textDecorationLine:'line-through'
  }
});
