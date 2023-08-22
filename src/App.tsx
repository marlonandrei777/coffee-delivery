import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      {/* <Checkout /> */}
      <Success />
      {/* <Home /> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
