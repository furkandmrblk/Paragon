import React from 'react';
import {
  ContactDiv,
  ContactForm,
  ContactFormDiv,
  ContactLine,
} from './ContactS';

export const Contact = () => {
  return (
    <ContactDiv>
      <ContactFormDiv>
        <ContactForm>SAY HI!</ContactForm>
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
            stroke="#FDFDFD"
            strokeWidth="2.13307"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ContactFormDiv>

      <ContactLine />
    </ContactDiv>
  );
};
