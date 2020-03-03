import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Head from '../components/Head';
import {
  Container,
  Content,
  GlobalStyles,
} from '../components/styled-components';
import { usePersonalData, useSiteMetadata } from '../hooks';
import theme from '../theme';
import 'normalize.css';

export default () => {
  const { name } = usePersonalData();
  const { charSet, desciption, lang, robots, title } = useSiteMetadata();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Head />
          <Content>
            <About />
            <Experience />
            <Education />
          </Content>
        </Container>
      </ThemeProvider>
      <Helmet>
        <meta charSet={charSet} />
        <meta name="description" content={desciption} />
        <meta name="robots" content={robots} />
        <html lang={lang} />
        <title>{`${title} - ${name}`}</title>
      </Helmet>
    </>
  );
};
