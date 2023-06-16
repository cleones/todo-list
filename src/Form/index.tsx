import { styles } from './styles';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { useForm } from './form.hook';

export const Form = () => {
  const {newTask, setNewTask, handleAddTask} = useForm();
  return (
    <View style={styles.container}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button onPress={handleAddTask} disabled={!newTask.length}>
        <AntDesign name="pluscircleo" size={16} color="#fff" />
      </Button>
    </View>
  );
};
