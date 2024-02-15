import { createContext, useState } from "react";

export const TasksContext = createContext({
  tasks: [],
  AddTask: () => {},
  DeleteTask: () => {},
  CompletTask: () => {},
});

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (value) => {
    const newTask = {
      id: Math.random(),
      value: value,
      isComplet: false,
    };

    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleCompletTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id && !task.isComplet) {
        return { ...task, isComplet: true };
      } else if (task.id === id && task.isComplet) {
        return { ...task, isComplet: false };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  const tasksCtx = {
    tasks: tasks,
    AddTask: handleAddTask,
    DeleteTask: handleDeleteTask,
    CompletTask: handleCompletTask,
  };
  return (
    <TasksContext.Provider value={tasksCtx}>{children}</TasksContext.Provider>
  );
};
