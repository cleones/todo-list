import { Image, View } from 'react-native';
import Logo from '../../assets/Logo.png';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
    </View>);
};
