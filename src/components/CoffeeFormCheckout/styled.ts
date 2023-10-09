import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  div {
    display: flex;
    gap: 0.75rem;

    input[type="number"] {
      width: 12.5rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  &::after {
    content: attr(data-required);
    position: absolute;
    right: 10px;
    top: 18px;
    font-size: 0.75rem;
    font-style: italic;
    transform: translateY(-50%);
    color: ${(props) => props.theme["base-label"]};
  }

  input[type="text"] {
    width: 21.75rem;
  }
`;

export const InputWrapperText = styled.div`
  div:nth-child(1) input[type="text"] {
    width: 12.5rem;
  }

  div:nth-child(2) input[type="text"] {
    width: 17rem;
  }

  div:nth-child(3) input[type="text"] {
    width: 100%;
  }
`;
