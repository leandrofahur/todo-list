import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddNewTaskForm } from "./components/AddNewTaskForm/AddNewTaskForm.component";
import { TodoChecklistContainer } from "./TodoChecklist.styled";

interface Task {
  content: string;
}

export function TodoChecklist() {
  const [content, setContent] = useState<Task>({ content: "" });

  const { reset } = useForm<Task>();

  async function handleCreateNewTask(data: Task) {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 2000);
    // });

    const { content } = data;
    setContent({ content });
    console.log(content);
    reset();
  }

  return (
    <TodoChecklistContainer>
      <AddNewTaskForm handleCreateNewTask={handleCreateNewTask} />
    </TodoChecklistContainer>
  );
}
