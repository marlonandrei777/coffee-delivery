import { styled } from "styled-components";

export const BannerContainer = styled.div`
  /* background-image: url("../../assets/home-background.svg") no-repeat 800px; */

  display: flex;
  justify-content: space-between;
  padding: 5.88rem 10rem 6.75rem;

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

export const CoffeeContainer = styled.main``;
