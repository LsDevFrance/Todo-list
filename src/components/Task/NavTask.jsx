import { useContext } from "react";
import { TasksContext } from "../../store/tasks-context";

export const NavTask = () => {
  const { tasks } = useContext(TasksContext);

  const tasksComplet = tasks.reduce((acc, curr) => {
    if (curr.isComplet) {
      acc++;
    }
    return acc;
  }, 0);
  return (
    <div className="task-nav">
      <p className="task-total">
        Task Total <span>{tasks.length}</span>
      </p>
      <p className="task-resume">
        Resume
        <span>
          {tasksComplet} / {tasks.length}
        </span>
      </p>
    </div>
  );
};
