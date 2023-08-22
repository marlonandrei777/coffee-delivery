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

export const CoffeeDetailContainer = styled.article`
  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  height: 6rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CountAndRemoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CountAndButtonWarapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 2rem;
  padding: 0rem 0.5rem;

  background: ${(props) => props.theme["base-button"]};
  border: none;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.84rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  div:nth-child(3) {
    p,
    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 700;
    }
  }
`;

export const ConfirmOrderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-"]};
  border-radius: 0.375rem;
  height: 2.75rem;

  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
