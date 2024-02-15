import { useContext } from "react";
import { TasksContext } from "../../store/tasks-context";
import { ItemTask } from "./ItemTask";
import { NavTask } from "./NavTask";

export const Task = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task">
      <NavTask />
      <div className="task-list">
        {tasks.length <= 0 && "You have not task"}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <ItemTask key={task.id} value={task.value} id={task.id} />
          ))}
      </div>
    </div>
  );
};
