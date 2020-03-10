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

const Wrapper = styled.address`
  padding: 0;
  margin: -${props => props.theme.spacing.xs} 0 0;
  list-style: none;
  font-style: normal;
`;

const Item = styled.span`
  max-width: fit-content;
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.typography.fontSizes.md};
`;

const Link = styled(Item).attrs(() => ({ as: 'a' }))`
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
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
      <Wrapper>
        <Link href={contact.url}>
          <ExternalLink size="1.18rem" />
          <TextWrapper>{trimmedURL}</TextWrapper>
        </Link>
        <Item>
          <MapPin size="1.18rem" />
          <TextWrapper>{contact.address}</TextWrapper>
        </Item>
        <Link href={`mailto:${contact.email}`}>
          <Mail size="1.18rem" />
          <TextWrapper>{contact.email}</TextWrapper>
        </Link>
        <Link href={`tel:${contact.phone}`}>
          <Smartphone size="1.18rem" />
          <TextWrapper>{visiblePhone}</TextWrapper>
        </Link>
      </Wrapper>
    </Section>
  );
};
