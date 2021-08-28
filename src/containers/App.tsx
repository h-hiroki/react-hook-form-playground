import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { Sample } from "../components/sample/Sample";

export const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography>App Container</Typography>
      </Container>

      <Container maxWidth="sm">
        <Sample />
      </Container>
    </>
  );
}
