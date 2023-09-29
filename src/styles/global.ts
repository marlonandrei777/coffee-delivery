import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  // acessibilida !IMPORTANT!
   html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (min-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: ${(props) => props.theme["background-"]};
    color: ${(props) => props.theme["base-text"]}; /* cor de texto padrão */
    -webkit-font-smoothing: antialiased;
  }
  
  /* por padrao esses elementos nao erdam a font do body por isso q definimos eles */
  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  // alterando a scrollbar
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme["base-button"]}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme["purple-"]}
  }
`;
