import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-area: ${props => props.gridName};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.section};
  font-size: ${props => props.theme.typography.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
const Content = styled.div`
  display: grid;
  grid-row-gap: ${props => props.theme.spacing.sm};
`;

export default ({ children, gridName, title }) => (
  <Wrapper gridName={gridName}>
    <header>
      <SectionTitle>{title}</SectionTitle>
    </header>
    <Content>{children}</Content>
  </Wrapper>
);
