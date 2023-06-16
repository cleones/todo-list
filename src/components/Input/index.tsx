import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme/colors';
import { useInputHook } from './input.hook';

type InputProps = TextInputProps;
export const Input = ({...rest}: InputProps) => {
  const {isFocused, handleFocus,handleBlur} = useInputHook();
  return (
    <TextInput
      style={[
        styles.container,
        isFocused ? styles.focusedBorder : styles.defaultBorder
      ]}
      placeholderTextColor={colors.gray300}
      onFocus={(e) => {
        handleFocus();
        rest.onFocus && rest.onFocus(e);
      }}
      onBlur={(e) => {
        handleBlur();
        rest.onBlur && rest.onBlur(e);
      }}
      
      {...rest}
    />
  );
};
