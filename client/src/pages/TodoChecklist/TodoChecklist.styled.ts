import styled from "styled-components";

export const TodoChecklistContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 37.5rem;
  width: 100%;
  margin: 0.3rem 0 1rem 0;

  input {
    border-radius: 4px;
    width: 36.5rem;
    height: 2.5rem;
    border: 0;
    padding: 1rem 2rem 1rem 3.5rem;
  }

  input:focus {
    outline: none;
  }

  svg {
    position: absolute;
    left: 0;
    background-color: ${(props) => props.theme.colors["gray-600"]};
    color: ${(props) => props.theme.colors["gray-100"]};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const AddTaskButton = styled.button`
  padding: 0.75rem 1rem;
  width: 100%;
  border: 0;
  border-radius: 4px;

  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors["gray-100"]};
  background-color: ${(props) => props.theme.colors["pink-900"]};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["pink-800"]};
    transition: background-color 0.2s;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["gray-500"]};
  }
`;

export const ErrorMessage = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.error};
`;
