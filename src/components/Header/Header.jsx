import { useContext, useRef } from "react";
import Logo from "../../assets/Logo.png";
import { TasksContext } from "../../store/tasks-context";
import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

export const Header = () => {
  const { AddTask } = useContext(TasksContext);

  const task = useRef();

  const handleClick = () => {
    AddTask(task.current.value);
    task.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      AddTask(task.current.value);
      task.current.value = "";
    }
  };

  return (
    <header className="header">
      {/* <div className="navbar">
        <Profile />
      </div> */}
      <div>
        <img className="header-logo" src={Logo} alt="logo" />
      </div>
      <div className="header-input">
        <Input
          ref={task}
          type="text"
          placeholder="Add a new task"
          onKeyDown={handleKeyDown}
        />
        <CreateButton onClick={handleClick}>Add +</CreateButton>
      </div>
    </header>
  );
};
