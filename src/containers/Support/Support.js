import React from "react";
import { Route, Switch } from "react-router";
import Basic from "./Basic/Basic";
import { Container, StyledSupport } from "./StyledSupport";
import NavbarItems from "./SupportNavbar/NavbarItems/NavbarItems";
const Support = () => (
  <StyledSupport>
    <NavbarItems />
    <Container>
      <Switch>
        <Route path={"/support/basic"}>
          <Basic />
        </Route>
        <Route path={"/support/double-closed"}>Hello closed!</Route>
      </Switch>
      <textarea></textarea>
    </Container>
  </StyledSupport>
);

export default Support;