import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  done?: boolean;
}
export const RadioButton = ({done = false, ...rest}:Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        done? styles.checked : styles.unchecked
      ]}
      {...rest}
    >
      {done && <Feather name="check" size={12} color="#fff" />}
    </TouchableOpacity>
  )
}
