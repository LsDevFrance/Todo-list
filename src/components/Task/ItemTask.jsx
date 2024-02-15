import { useContext } from "react";
import { TasksContext } from "../../store/tasks-context";

export const ItemTask = ({ value, id }) => {
  const { DeleteTask, CompletTask } = useContext(TasksContext);
  return (
    <div className="task-item">
      <div className="task-value">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => CompletTask(id)}
        />
        <p>{value}</p>
      </div>
      <button className="task-btn-trash" onClick={() => DeleteTask(id)}>
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
};
