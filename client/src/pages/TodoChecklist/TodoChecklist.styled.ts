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
  margin: 1rem 0;

  input {
    line-height: 1.6;
    border-radius: 4px;
    width: 36.5rem;
    height: 1.5rem;
    border: 0;
    padding: 1rem 2rem;
  }

  svg {
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.colors["gray-700"]};
    background-color: ${(props) => props.theme.colors["gray-100"]};
    border-radius: 4px;
  }
`;
