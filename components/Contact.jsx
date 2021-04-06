import React from 'react';
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
      <ContactText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Av. Javier Barros Sierra, Mexico City 01219
      </ContactText>
      <ContactSocials
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        href="mailto:hi@studio-paragon.com"
      >
        hi@studio-paragon.com
      </ContactSocials>
      <ContactSocialsDiv>
        <ContactSocials
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          Dribbble
        </ContactSocials>
        <ContactText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          /
        </ContactText>
        <ContactSocials
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          Behance
        </ContactSocials>
      </ContactSocialsDiv>
    </ContactContainer>
  );
};
