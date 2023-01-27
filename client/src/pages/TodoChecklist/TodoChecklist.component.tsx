import { FormLabel, TodoChecklistContainer } from "./TodoChecklist.styled";
import { Note } from "phosphor-react";

export function TodoChecklist() {
  return (
    <TodoChecklistContainer>
      <form action="">
        <FormLabel>
          <Note size={32} />
          <input type="text" />
        </FormLabel>
        <button type="button">Add Task</button>
      </form>
    </TodoChecklistContainer>
  );
}
