import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Text, Title, SubTitle } from './styled-components';
import { usePersonalData } from '../hooks';

const Description = styled(Text)`
  margin-top: ${props => props.theme.spacing.xs};
`;

export default () => {
  const { experience } = usePersonalData();
  const items = experience.map(
    ({ company, current, description, endDate, position, startDate }) => {
      const dates = current
        ? `${startDate} - Present`
        : `${startDate} - ${endDate}`;
      const subtitle = `${dates} | ${position}`;
      return (
        <article>
          <Title>{company}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <Description>{description}</Description>
        </article>
      );
    }
  );
  return <Section title="Experience">{items}</Section>;
};
