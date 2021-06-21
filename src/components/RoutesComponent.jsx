import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function RoutesComponent({ routes }) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            name={route.name}
            component={route.component}
            exact={true}
            key={index}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

RoutesComponent.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default RoutesComponent;
