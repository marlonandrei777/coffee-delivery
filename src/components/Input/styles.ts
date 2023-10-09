import styled, { css } from "styled-components";

interface InputContainerProps {
  hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  input {
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 0.25rem;
    height: 2.625rem;
    background: ${(props) => props.theme["base-input"]};
    padding: 0.75rem;

    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-label"]};
    }

    ${({ theme, hasError }) =>
      hasError &&
      css`
        border-color: ${theme["base-error"]};
      `}
  }

  > span {
    color: ${(props) => props.theme["base-error"]};
    font-size: small;
  }
`;
