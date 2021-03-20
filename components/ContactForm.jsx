import React, { useState } from 'react';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import {
  ContactBottomDiv,
  ContactBottomLeft,
  ContactBottomRight,
  ContactFormButton,
  ContactFormDiv,
  ContactFormInput,
  ContactFormInputDiv,
  ContactFormIntro,
  ContactFormScroll,
  ContactFormText,
  ContactFormTextArea,
  ContactLeftLine,
  ContactLeftSocial,
  ContactLeftSocialDiv,
  ContactLeftTitle,
  ContactMobileDiv,
  ContactMobileSocial,
  ContactMobileSocialDiv,
  ContactMobileSpan,
  ContactRightInformation,
  ContactRightTitle,
  ContactSpan,
  ErrorField,
  SuccessField,
} from './ContactFormS';

export const ContactForm = () => {
  return (
    <ContactFormDiv>
      {/* <ContactFormIntro>
        <ContactFormText>
          Let's Work <br />{' '}
          <span style={{ color: `#6a6a6b32` }}>
            Together on <br /> Something
          </span>
          .
        </ContactFormText>
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
            stroke="#8f8f8f"
            strokeWidth="2.13307"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ContactFormIntro> */}
      <ContactBottomDiv>
        <ContactMobileDiv>
          <ContactBottomLeft>
            <ContactLeftTitle>LET'S TALK</ContactLeftTitle>
            <ContactLeftLine />
            <ContactLeftSocialDiv>
              <ContactLeftSocial>INSTAGRAM</ContactLeftSocial>
              <ContactSpan>/</ContactSpan>
              <ContactLeftSocial>BEHANCE</ContactLeftSocial>
              <ContactSpan>/</ContactSpan>
              <ContactLeftSocial>DRIBBBLE</ContactLeftSocial>
            </ContactLeftSocialDiv>
          </ContactBottomLeft>
          <ContactBottomRight>
            <ContactRightTitle>OFFICE</ContactRightTitle>
            <ContactRightInformation>
              Av. Javier Barros Sierra <br /> Mexico City 01219
            </ContactRightInformation>
            <ContactRightTitle>HOURS</ContactRightTitle>
            <ContactRightInformation>
              Monday - Saturday <br /> 10am - 10pm
            </ContactRightInformation>
            <ContactRightTitle>EMAIL</ContactRightTitle>
            <ContactRightInformation href="mailto:hi@studio-paragon.com">
              hi@studio-paragon.com
            </ContactRightInformation>
          </ContactBottomRight>
          <ContactMobileSocialDiv>
            <ContactMobileSocial>INSTAGRAM</ContactMobileSocial>
            <ContactMobileSpan>/</ContactMobileSpan>
            <ContactMobileSocial>BEHANCE</ContactMobileSocial>
            <ContactMobileSpan>/</ContactMobileSpan>
            <ContactMobileSocial>DRIBBBLE</ContactMobileSocial>
          </ContactMobileSocialDiv>
        </ContactMobileDiv>
      </ContactBottomDiv>
    </ContactFormDiv>
  );
};
