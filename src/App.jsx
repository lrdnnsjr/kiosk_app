import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import "styles/app.scss";
import { _appRoutes } from "routes";
import RoutesComponent from "components/RoutesComponent";

function App() {
  return (
    <Container fluid>
      <RoutesComponent routes={_appRoutes} />
    </Container>
  );
}

export default App;
