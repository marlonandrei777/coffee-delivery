import { styled } from "styled-components";

export const BannerContainer = styled.div`
  /* background-image: url("../../../public/homeBackground.svg");
  background-size: 100%;

  background-position-y: 25%;
  background-position-x: 100%;

  background-repeat: no-repeat; */

  display: flex;
  justify-content: space-between;

  max-width: 100%;
  margin: 0rem auto;
  padding: 5.87rem 33rem;

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
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font: 800 2rem "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeList = styled.ul`
  margin-top: 3.38rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  list-style: none;
`;
