import styled from "styled-components";

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
