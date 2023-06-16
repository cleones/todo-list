import { Image, Text, View } from 'react-native';
import EmptyLogo from '../../assets/Clipboard.png';
import { styles } from './styles';
export const TaskListEmpty = () => {
  return (
    <View style={styles.container}>
      <Image source={EmptyLogo}/>
      <View style={styles.emptyInfo}>
        <Text style={styles.emptyInfoStrongText}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyInfoText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
