import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.section};
  font-size: ${props => props.theme.typography.fontSizes.sm};
  text-transform: uppercase;
`;

export default ({ children, title }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
);
