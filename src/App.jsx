import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Main/Main";
import { Aside } from "./components/Aside/Aside";

import { navigation } from "./utils/NavigationRoutes";
import { Header } from "./components/Header/Header";

const GlobalStyles = createGlobalStyle` 
:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background: #f4f9f8;
}

li {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BodyWrapper = styled.div`
  display: flex;
  gap: 45px;
`;

const theme = {
  main: {
    color: "#072D4B",
  },

  secondary: {
    color: "",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppWrapper>
        <Header />

        <BodyWrapper>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />}>
              {navigation.map((item, itemIndex) => {
                !itemIndex ? (
                  <Route index element={<Main />}></Route>
                ) : (
                  <Route path={item.path} element={<Main />}></Route>
                );
              })}
            </Route>
          </Routes>

          <Aside />
        </BodyWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
