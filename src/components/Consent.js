import React from 'react';
import styled from 'styled-components';
import { usePersonalData } from '../hooks';

const Wrapper = styled.section`
  grid-area: consent;
`;
const Statement = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 12px;
  text-align: justify;
`;

export default () => {
  const { consent } = usePersonalData();

  return (
    <Wrapper>
      <Statement>{consent}</Statement>
    </Wrapper>
  );
};
