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

export default ({ isFull }) => {
  const { consent, consentFull } = usePersonalData();

  return (
    <Wrapper>
      <Statement>{isFull ? consentFull : consent}</Statement>
    </Wrapper>
  );
};
