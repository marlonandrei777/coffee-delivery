import { styled } from "styled-components";

export const SuccessContentContainer = styled.div`
  max-width: 70rem;
  margin: 5rem auto;

  background: url("../../../public/success-background.svg") no-repeat 934px
    bottom;
  background-position-y: 6.6rem;
  background-position-x: 41.1rem;
  background-size: 30rem;

  h2 {
    font: 800 2rem "Baloo 2", sans-serif;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  & > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};

    display: block;
    margin-top: 0.25rem;
  }
`;

export const InfoAddressContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32.875rem;
  height: auto;
  padding: 2.5rem;

  margin-top: 2.5rem;

  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;
  background: linear-gradient(
        ${(props) => props.theme["background-"]},
        ${(props) => props.theme["background-"]}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
`;

export const OrderInfoWrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;
