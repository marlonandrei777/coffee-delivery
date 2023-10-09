import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme["base-error"]};
    font-size: small;
  }
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
  height: 3.1875rem;

  // pro botao nao se deslocar na hora q o hover de borda for ativado
  border: 1px solid transparent;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    margin-top: 0.1rem;
    // para o texto nao quebrar a linha
    white-space: nowrap;
  }

  &[data-state="checked"] {
    border: 1px solid ${(props) => props.theme["purple-"]};
    background: ${(props) => props.theme["purple-light"]};
  }
`;
