import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}
