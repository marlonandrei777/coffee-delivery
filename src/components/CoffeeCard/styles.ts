import styled from "styled-components";

export const CoffeeCardContainer = styled.li`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem;

  width: 16rem;
  height: 20.625rem;
`;

export const CoffeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -1.5rem;
  }

  span {
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 6.25rem;
    margin-top: 0.75rem;

    color: ${(props) => props.theme["yellow-dark"]};
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    font-size: 0.625rem;

    padding: 0.25rem 0.5rem;
  }

  strong {
    margin-top: 1.25rem;

    font: 700 1.25rem "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    margin-top: 0.5rem;
    width: 13.5rem;

    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    line-height: 130%;
  }
`;

export const FooterPrice = styled.footer`
  margin-top: 2.06rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.44rem;
`;

export const SmallSpanContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;

  small {
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font: 800 1.5rem "Baloo 2", sans-serif;
  }
`;

export const BuyDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 0.38rem;
  padding: 0.4rem;

  font-size: 0;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["purple-"]};
  }
`;
