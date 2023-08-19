import { styled } from "styled-components";

export const BannerContainer = styled.div`
  /* background-image: url("../../../public/homeBackground.svg");
  background-size: 100%;

  background-position-y: 25%;
  background-position-x: 100%;

  background-repeat: no-repeat; */

  display: flex;
  justify-content: space-between;
  padding: 5.88rem 20rem 6.75rem; /* 5.88rem 10rem 6.75rem; */

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const ContentContainer = styled.div`
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2";
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 130%;

    display: block;
    margin-top: 1rem;
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 4.12rem;

  display: flex;
  gap: 2.5rem;

  article + article {
    margin-top: 1.25rem;
  }
`;

export const InfoContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const IconContainer = styled.div<{ $backGroundColor?: string }>`
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 0;

  background-color: ${(props) => props.$backGroundColor || ""};
`;

export const CoffeeContainer = styled.div`
  padding: 2rem 20rem; /* 10rem */

  h2 {
    font: 800 2rem "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeList = styled.main`
  margin-top: 3.38rem;

  display: flex;
  gap: 2rem;
`;

export const CoffeeCardContainer = styled.div`
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
