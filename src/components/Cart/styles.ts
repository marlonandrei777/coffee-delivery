import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

// Estilizei o NavLink diretamente
export const StyledLink = styled(NavLink)`
  background: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;
  border-radius: 0.375rem;

  font-size: 0;
  position: relative;

  div {
    display: flex;
    justify-content: center;

    background: ${(props) => props.theme["yellow-dark"]};
    text-decoration: none;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    bottom: 1.8rem;
    left: 1.8rem;

    line-height: 0; // para o foco ao dar tab, ficar ajustado do tamanho da caixa

    span {
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`;
