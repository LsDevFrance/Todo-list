import {
  DndContext,
  MouseSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useContext } from "react";
import { TasksContext } from "../../store/tasks-context";
import { ItemTask } from "./ItemTask";
import { NavTask } from "./NavTask";

export const Task = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  return (
    <div className="task">
      <NavTask />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <div className="task-list">
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.length <= 0 && "You have not task"}
            {tasks.length > 0 &&
              tasks.map((task) => (
                <ItemTask key={task.id} value={task.value} id={task.id} />
              ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};
