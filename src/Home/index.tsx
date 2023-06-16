import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '../components/Header';
import { Form } from '../Form';
import { Tasks } from '../Tasks';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form />
        <Tasks/>
      </View>
      
    </View>
  );
};


