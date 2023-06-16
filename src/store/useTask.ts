import { create } from 'zustand';

export type Task = {
  id: string,
  description: string,
  done: boolean,
}

type UseTaskStore = {
  tasks: Task[];
  taskFinalized: () => number;
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  changeStatus: (id: string) => void;
  
}

export const useTaskStore = create<UseTaskStore>((set,get) => ({
  tasks: [],
  taskFinalized:() => get().tasks.filter(task => task.done).length,
  addTask: (task) => set((state) => ({tasks: [...state.tasks, task]})),
  removeTask: (id) => set((state) => ({tasks: state.tasks.filter(task => task.id !== id)})),
  changeStatus: (id) => set((state) => ({
    tasks: state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    })
  })),
  
}));
