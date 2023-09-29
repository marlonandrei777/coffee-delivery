import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

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
  }

  input[type="number"] {
    width: 12.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
    width: 100%;

    input[type="number"] {
      width: 19rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  &::after {
    content: attr(data-required);
    position: absolute;
    right: 10px;
    top: 50%;
    font-size: 0.75rem;
    font-style: italic;
    transform: translateY(-50%);
    color: ${(props) => props.theme["base-label"]};
  }

  input[type="text"] {
    width: 100%;
  }
`;

export const InputWrapperText = styled.div`
  input:nth-child(1) {
    width: 12.5rem;
  }

  input:nth-child(2) {
    width: 17.25rem;
  }

  input:nth-child(3) {
    width: 4rem;
  }
`;
