import React from "react";
import Router from "./routes/router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./bases/theme"

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <Router/>
    </ThemeProvider>
  )
}


export default App;
