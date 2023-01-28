import { useForm } from "react-hook-form";
import { Note } from "phosphor-react";
import {
  AddTaskButton,
  ErrorMessage,
  FormLabel,
  TodoChecklistContainer,
} from "./TodoChecklist.styled";

interface Task {
  content: string;
}

export function TodoChecklist() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Task>();

  async function handleCreateNewTask(data: Task) {
    const { content } = data;

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(data.content);
  }

  return (
    <TodoChecklistContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        {errors.content && <ErrorMessage>Field must not be empty</ErrorMessage>}
        <FormLabel>
          <Note size={40} />
          <input
            id="content"
            type="text"
            placeholder="Add a new task..."
            {...register("content", { required: true })}
          />
        </FormLabel>
        <AddTaskButton type="submit" disabled={isSubmitting}>
          Add Task
        </AddTaskButton>
      </form>
    </TodoChecklistContainer>
  );
}
