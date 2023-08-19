import { styled } from "styled-components";

export const CountCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.53rem;
  width: 4.5rem; // alterado p pagina de pedidos

  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 0.38rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;
  }

  span {
    color: ${(props) => props.theme["base-title"]};
  }
`;
