import { Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '../../theme/colors';
import { RadioButton } from '../RadioButton';
import { Task as TypeTask } from '../../store/useTask';


type Props = {
  task: TypeTask,
  onCheckClick: () => void,
  onRemoveClick: () => void,
}
export const Task = ({task, onCheckClick, onRemoveClick}: Props) => {
  return (
    <View style={styles.container}>
      <RadioButton done={task.done} onPress={onCheckClick}/>
      <Text
        style={[
          styles.description,
          task.done ? styles.doneDescription : styles.defaultDescription
        ]}>
        {task.description}
      </Text>
      <TouchableOpacity onPress={onRemoveClick}>
        <EvilIcons name="trash" size={24} color={colors.gray300}/>
      </TouchableOpacity>
    </View>
  );
};
