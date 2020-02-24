import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${props => props.theme.colors.base};
    font-size: 16px;
    font-family: ${props => props.theme.typography.fontFamily};
    line-height: ${props => props.theme.typography.lineHeight};
    text-rendering: optimizeLegibility;
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
      font-size: 12.288px;
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
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  grid-auto-flow: column;
  grid-column-gap: ${props => props.theme.spacing.base};
  grid-row-gap: ${props => props.theme.spacing.base};
  /* column-count: 2;
  column-fill: auto; */
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.md};
`;
