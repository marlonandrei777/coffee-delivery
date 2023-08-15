import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 20rem; /* 10rem */
`;

export const LocalizationCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme["purple-light"]};
    padding: 0.5rem;
    border-radius: 0.375rem;

    span {
      color: ${(props) => props.theme["purple-dark"]};
      font-size: 0.875rem;
    }
  }
`;
