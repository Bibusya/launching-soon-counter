import React from "react";
import { ThemeProvider } from "styled-components";
import { MainWrapper, Title } from "./App.styles";
import { theme } from "./themes/theme";

import Hills from "./asset/hills/Hills";
import Counter from "./components/counter/Counter";
import Social from "./components/social/Social";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <MainWrapper>
        <Title>WE'RE LAUNCHING SOON</Title>
        <Counter />
        <Social />
        <Hills />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;
