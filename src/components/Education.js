import React from 'react';
import Section from './Section';
import { Title, SubTitle } from './styled-components';
import { usePersonalData } from '../hooks';

export default () => {
  const { education } = usePersonalData();
  const items = education.map(({ endDate, school, startDate, title }) => {
    const subtitle = `${startDate} - ${endDate} | ${title}`;
    return (
      <article key={subtitle}>
        <Title>{school}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </article>
    );
  });

  return (
    <Section title="Education" gridName="education">
      {items}
    </Section>
  );
};
