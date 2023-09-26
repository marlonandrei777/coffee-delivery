import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["background-"]};

  max-width: 70rem;
  height: 6.5rem;
  margin: 0 auto;

  /* width: 100%; */
  /* position: fixed; */
  /* right: 32.9rem; */
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
