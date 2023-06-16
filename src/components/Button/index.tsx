import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps
export const Button = ({children, ...rest}:ButtonProps) => {
  
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {children}
    </TouchableOpacity>
  )
  
}
