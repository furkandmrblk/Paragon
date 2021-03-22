import styled, { keyframes } from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// ContactForm
export const ContactFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

// ContactForm Intro
const scrollAnimation = keyframes`
  0%, 100% {
        transform: translate(0, 0) rotate(90deg);
    }
    50% {
        transform: translate(0, 15px) rotate(90deg);
    }
`;

export const ContactFormIntro = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: ${color.$black};

  svg {
    height: 1.8rem;
    width: 1rem;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    transform: rotate(90deg);

    animation: ${scrollAnimation} 2.5s infinite;

    @media (max-width: ${media.laptopS}) {
      cursor: pointer;
    }

    transition: all 250ms ease-in-out;

    margin-top: 5rem;

    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 1.2rem;
      width: 0.7rem;
    }
    @media (max-width: 550px) {
      height: 1.1rem;
      width: 0.7rem;
    }
  }
`;

// ContactForm Intro Text
export const ContactFormText = styled.h1`
  font-size: ${typeface.$mqlg1font};
  font-weight: ${typeface.$medium};

  color: ${color.$white};

  user-select: none;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqlg3font};

    margin-top: 3rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqlg3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqlg4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqlg6font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqlg8font};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqmd5font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd6font};
  }
`;

// ContactBottomDiv
export const ContactBottomDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  width: 100vw;

  background-color: ${color.$white};

  padding-top: 10.5rem;
  padding-bottom: 8.5rem;

  @media (max-width: ${media.laptopL}) {
    padding-top: 11.5rem;
    padding-bottom: 5rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

// ContactBottomLeft
export const ContactBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContactLeftTitle = styled.h1`
  font-size: ${typeface.$mdfont};
  font-weight: ${typeface.$medium};

  color: transparent;
  -webkit-text-stroke: 1.2px ${color.$black};

  user-select: none;

  margin-bottom: 12.6rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqmd1font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqmd2font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqmd3font};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqmd4font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqmd5font};
    -webkit-text-stroke: 1px ${color.$black};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd7font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd6font};
  }
  @media (max-width: 550px) {
    margin-bottom: 5rem;
  }
`;

export const ContactLeftLine = styled.div`
  height: 0px;
  width: 40rem;

  border: 1px solid ${color.$gray};

  margin-bottom: 12.6rem;

  @media (max-width: ${media.laptopL}) {
    width: 30rem;
  }
  @media (max-width: ${media.laptopM}) {
    width: 24.5rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 20rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 14.5rem;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const ContactLeftSocialDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    display: none;
  }
`;
export const ContactLeftSocial = styled.a`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$thin};
  color: ${color.$black};

  user-select: none;

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsmfont1};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsmfont2};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsmfont3};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsmfont3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqsmfont4};
  }
`;

// ContactBottomRight
export const ContactBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContactRightTitle = styled.h1`
  font-size: ${typeface.$copyrightfont};
  font-weight: ${typeface.$light};
  color: ${color.$gray};

  user-select: none;

  &:first-child {
    margin-top: 2.6rem;
  }

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    &:first-child {
      margin-top: 2rem;
    }
  }
  @media (max-width: ${media.laptopM}) {
    &:first-child {
      margin-top: 1.5rem;
    }
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqcopyrightfont1};
    &:first-child {
      margin-top: 1.3rem;
    }
  }
  @media (max-width: ${media.tablet}) {
    &:first-child {
      margin-top: 1rem;
    }
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqcopyrightfont2};
  }
`;

export const ContactRightInformation = styled.a`
  font-size: ${typeface.$mqtext2font};
  font-weight: ${typeface.$thin};
  color: ${color.$black};

  margin-top: 1rem;
  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  &:last-child {
    &:hover {
      color: ${color.$lightgray};
    }

    transition: all 350ms ease-in-out;
  }

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqtext3font};

    &:not(:last-child) {
      margin-bottom: 9.4rem;
    }
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqtext4font};
    &:not(:last-child) {
      margin-bottom: 8.9rem;
    }
  }
  @media (max-width: ${media.laptopS}) {
    &:last-child {
      cursor: pointer;
    }
    &:not(:last-child) {
      margin-bottom: 8.8rem;
    }
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqtext5font};
    &:not(:last-child) {
      margin-bottom: 8.6rem;
    }
  }
  @media (max-width: 550px) {
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqtext6font};
  }
`;

export const ContactMobileDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  width: 100vw;

  @media (max-width: 550px) {
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const ContactMobileSocialDiv = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: flex;
    align-items: center;

    margin-top: 5rem;
  }
`;

export const ContactMobileSocial = styled.a`
  display: none;
  @media (max-width: 550px) {
    display: block;
    font-size: ${typeface.$mqsmfont4};
    font-weight: ${typeface.$thin};
    color: ${color.$black};

    user-select: none;

    &:hover {
      color: ${color.$lightgray};
    }

    transition: all 350ms ease-in-out;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqtext6font};
  }
`;

// Spans

export const ContactSpan = styled.span`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$thin};
  color: ${color.$black};

  margin: 0 0.3rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsmfont1};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsmfont2};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsmfont3};
    margin: 0 0.1rem;
  }
`;

export const ContactMobileSpan = styled.span`
  font-size: ${typeface.$mqsmfont4};
  color: ${color.$black};

  margin: 0 0.2rem;

  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqtext6font};
  }
`;

// Legals
export const LegalDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;

  bottom: 0;

  background-color: ${color.$white};
  color: ${color.$gray};

  padding: 0rem 1rem 1rem 1rem;

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const LegalItem = styled.a`
  font-size: ${typeface.$mqcopyrightfont1};

  &:first-child {
    margin-right: 3.5rem;
  }

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqcopyrightfont2};
  }
  @media (max-width: ${media.mobileM}) {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;
