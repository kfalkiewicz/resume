import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import { Container, GlobalStyles } from '../components/styled-components';
import theme from '../theme';
import 'normalize.css';

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
      <Header>Karol Falkiewicz</Header>
    </Container>
  </ThemeProvider>
);
