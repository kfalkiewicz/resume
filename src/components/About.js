import React from 'react';
import Section from './Section';
import { Text } from './styled-components';
import { usePersonalData } from '../hooks';

export default () => {
  const { about } = usePersonalData();

  return (
    <Section title="About me" gridName="about">
      <Text>{about}</Text>
    </Section>
  );
};
