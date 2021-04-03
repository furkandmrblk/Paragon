import React, { useState } from 'react';
import Link from 'next/link';
import {
  ContactContainer,
  ContactText,
  ContactSocials,
  ContactSocialsDiv,
} from './ContactS';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactText>Av. Javier Barros Sierra, Mexico City 01219</ContactText>
      <ContactSocials href="mailto:hi@studio-paragon.com">
        hi@studio-paragon.com
      </ContactSocials>
      <ContactSocialsDiv>
        <ContactSocials>Dribbble</ContactSocials>
        <ContactText>/</ContactText>
        <ContactSocials>Behance</ContactSocials>
      </ContactSocialsDiv>
    </ContactContainer>
  );
};
