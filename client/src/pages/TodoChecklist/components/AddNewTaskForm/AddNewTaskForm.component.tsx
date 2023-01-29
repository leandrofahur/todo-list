import React from "react";
import { useForm } from "react-hook-form";
import { Note } from "phosphor-react";
import {
  AddTaskButton,
  ErrorMessage,
  FormLabel,
} from "./AddNewTaskForm.styled";

interface Task {
  content: string;
}

interface AddNewTaskFormProps {
  handleCreateNewTask: (data: Task) => Promise<void>;
}

export function AddNewTaskForm(props: AddNewTaskFormProps) {
  const { handleCreateNewTask } = props;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Task>();

  return (
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
  );
}
