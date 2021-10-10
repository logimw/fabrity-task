import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import MainTemplate from "components/templates/MainTemplate";
import { ThemeProvider } from "styled-components";
import NewsSection from "components/templates/NewsSection/NewsSection";
import TechnologiesSection from "components/templates/TechnologiesSection/TechnologiesSection";
import IntroSection from "components/templates/IntroSection/IntroSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Intro from "components/Intro";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <IntroSection>
            <Switch>
              <Route exact path="/">
                <Intro />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </IntroSection>
          <NewsSection />
          <TechnologiesSection />
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
