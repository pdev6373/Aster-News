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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  margin-block: 3px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #2f9ef84b;

  border-left: 3px transparent solid;
  background-clip: padding-box;
  
  &:hover {
    background-color: #2f9ef88f;
  }
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

const MainWrapper = styled.div`
  position: fixed;
  /* top: 76px; */
  top: 0;
  padding-top: 76px;
  margin-top: 8px;
  bottom: 0;
  right: 0;
  padding-right: 344px;
  left: 305px;
  overflow-y: auto;

  main {
    width: calc(100% - 10px);
  }
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
      <Header />
      <Navigation />

      <MainWrapper>
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
      </MainWrapper>

      <Aside />
    </ThemeProvider>
  );
}

export default App;
