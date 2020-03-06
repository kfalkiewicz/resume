import React from 'react';
import styled from 'styled-components';
import {
  ExternalLink,
  Mail,
  MapPin,
  Smartphone,
} from '@styled-icons/remix-line';
import Section from './Section';
import { usePersonalData } from '../hooks';

const Link = styled.a`
  display: contents;
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.md};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const List = styled.ul`
  padding: 0;
  margin: -${props => props.theme.spacing.xs} 0 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-top: ${props => props.theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.span`
  margin-left: 0.3rem;
`;

export default () => {
  const { contact } = usePersonalData();
  const trimmedURL = contact.url
    .split('.')
    .slice(1)
    .join('.');
  const visiblePhone = `(+48) ${contact.phone.slice(3)}`;

  return (
    <Section title="Contact" gridName="contact">
      <List>
        <ListItem>
          <Link href={contact.url}>
            <ExternalLink size="1.18rem" />
            <TextWrapper>{trimmedURL}</TextWrapper>
          </Link>
        </ListItem>
        <ListItem>
          <MapPin size="1.18rem" />
          <TextWrapper>{contact.address}</TextWrapper>
        </ListItem>
        <ListItem>
          <Link href={`mailto:${contact.email}`}>
            <Mail size="1.18rem" />
            <TextWrapper>{contact.email}</TextWrapper>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={`tel:${contact.phone}`}>
            <Smartphone size="1.18rem" />
            <TextWrapper>{visiblePhone}</TextWrapper>
          </Link>
        </ListItem>
      </List>
    </Section>
  );
};
