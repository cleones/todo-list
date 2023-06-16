import { useState } from 'react';
import { useTaskStore } from '../store/useTask';
import uuid from 'react-native-uuid';

export const useForm = () => {
  const [newTask, setNewTask] = useState('');
  const {addTask} = useTaskStore();
  
  const handleAddTask = () => {
    addTask({
      id: uuid.v4().toString(),
      description: newTask,
      done: false
    });
    setNewTask('');
  };
  return {
    newTask, setNewTask, handleAddTask
  };
};
