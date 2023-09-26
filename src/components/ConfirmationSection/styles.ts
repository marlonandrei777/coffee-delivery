import styled from "styled-components";

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.84rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  div:nth-child(3) {
    p,
    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 700;
    }
  }
`;

// Estilizei o NavLink diretamente
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-"]};
  border: none;
  border-radius: 0.375rem;
  height: 2.75rem;

  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
