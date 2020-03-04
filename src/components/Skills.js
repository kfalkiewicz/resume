import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { usePersonalData } from '../hooks';

const List = styled.ul`
  display: flex;
  margin: -${props => props.theme.spacing.xs} 0 0;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
`;

const Skill = styled.li`
  margin-top: ${props => props.theme.spacing.xs};
  margin-right: ${props => props.theme.spacing.xs};
  padding: 0 0.75rem;
  background-color: ${props => props.theme.colors.tagsBG};
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.base};
  line-height: 1.625;
`;

export default () => {
  const { skills } = usePersonalData();
  const items = skills.map(skill => <Skill>{skill}</Skill>);

  return (
    <Section title="Skills" gridName="skills">
      <List>{items}</List>
    </Section>
  );
};
