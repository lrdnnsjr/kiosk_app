import React from "react";
import { Container } from "react-bootstrap";

function MainLayout({ children }) {
  return <Container fluid>{children}</Container>;
}

export default MainLayout;
