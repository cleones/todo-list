import { Text, View } from 'react-native';
import { styles } from './styles';
import { useTaskStore } from '../../store/useTask';

export const TaskHeader = () => {
  const {tasks, taskFinalized} = useTaskStore();
  return (
    <View style={styles.container}>
      <View style={styles.headerItem}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{tasks.length}</Text>
        </View>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.doneText}>Concluídas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{taskFinalized()}</Text>
        </View>
      </View>
    </View>
  );
};
