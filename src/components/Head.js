import React from 'react';
import styled from 'styled-components';
import { usePersonalData } from '../hooks';

const Container = styled.header`
  margin-bottom: ${props => props.theme.spacing.base};
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.xl};
`;

const Box = styled.div`
  width: 20px;
  height: 50px;
  display: block;
  margin-right: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.base};
`;

export default () => {
  const { name } = usePersonalData();

  return (
    <Container>
      <Box />
      <Title>{name}</Title>
    </Container>
  );
};
