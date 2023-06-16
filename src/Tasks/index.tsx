import { FlatList, View } from 'react-native';
import { TaskHeader } from './TaskHeader';
import { styles } from './styles';
import { TaskListEmpty } from './TaskListEmpty';
import { Task } from '../components/Task';
import { useTaskStore } from '../store/useTask';

export const Tasks = () => {
  const {tasks, changeStatus, removeTask} = useTaskStore();
  return (
    <View style={styles.container}>
      <TaskHeader/>
      <FlatList
        data={tasks}
        renderItem={({item: task}) => (
          <Task
            task={task}
            onCheckClick={() =>changeStatus(task.id)}
            onRemoveClick={() =>removeTask(task.id)}
          />
        )}
        ListEmptyComponent={<TaskListEmpty/>}
      />
        {/*<TaskListEmpty/>*/}
    </View>
  );
};
