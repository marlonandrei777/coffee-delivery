import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
  max-width: 70rem;
  margin: 2.5rem auto;

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
