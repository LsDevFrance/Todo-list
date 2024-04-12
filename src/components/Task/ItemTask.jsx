import { CSS } from "@dnd-kit/utilities";
import { useContext } from "react";
import { TasksContext } from "../../store/tasks-context";

import { useSortable } from "@dnd-kit/sortable";

export const ItemTask = ({ value, id }) => {
  const { DeleteTask, CompletTask } = useContext(TasksContext);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="task-item"
    >
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
