import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 20rem;

  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  h3 {
    font: 700 1.125rem "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const FormContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  height: 23.25rem;
  margin-top: 0.94rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem;

  form {
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

export const PayDetailContainerCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  margin-top: 0.75rem;
  border-radius: 0.375rem;
  padding: 2.5rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const TransactionTypeButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  padding: 1rem;

  border: none;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 0.375rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    margin-top: 0.1rem;
  }
`;
