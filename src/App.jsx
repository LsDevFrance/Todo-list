import "./App.css";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { TasksContextProvider } from "./store/tasks-context";

export const App = () => {
  return (
    <>
      <TasksContextProvider>
        <Header />
        <Task />
      </TasksContextProvider>
    </>
  );
};
