import { styled } from "styled-components";

export const CoffeeSelectContainer = styled.div`
  h3 {
    font: 700 1.125rem "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeSelectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 0.94rem;
  width: 28rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem;
`;
