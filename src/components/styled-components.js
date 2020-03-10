import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${props => props.theme.colors.base};
    font-size: 16px;
    font-family: ${props => props.theme.typography.fontFamily};
    line-height: ${props => props.theme.typography.lineHeight};
    text-rendering: optimizeLegibility;
    @media screen and (max-width: 1024px) {
      font-size: calc(75% + 4 * (100vw - 320px) / 704);
    }
  }
  body, h1, h2, h3, p, a {
    margin: 0;
  }
  * {
    box-sizing: inherit;
  }
  @media print {
    @page {
      margin: 0;
    }
    html {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      color: #000;
      font-size: 12px;
    }
  }
`;

export const Container = styled.main`
  height: 91.350883rem;
  max-width: 64.609375rem;
  padding: 4rem;
  margin: 0 auto;
  @media print {
    height: 77.04132rem;
    padding: 4rem;
  }
  @media screen and (max-width: 1023px) {
    height: auto;
  }
  @media screen and (max-width: 425px) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${props => props.theme.spacing.base};
  grid-row-gap: ${props => props.theme.spacing.base};
  grid-template-areas:
    'about experience'
    'education experience'
    'skills experience'
    'contact experience'
    'consent experience'
    '. experience';
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'about'
      'experience'
      'education'
      'skills'
      'contact'
      'consent';
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.lg};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
`;

export const SubTitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.fontSizes.md};
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.md};
  text-align: justify;
`;
