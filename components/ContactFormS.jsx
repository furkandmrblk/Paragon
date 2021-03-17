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

  overflow: hidden;
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

// ContactForm Input
export const ContactFormInputDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ContactFormInput = styled.input`
  height: 3.0625rem;
  width: 25.3125rem;

  font-size: ${typeface.$copyrightfont};
  padding-left: 1rem;

  background-color: ${color.$white};

  border-bottom: 1px solid ${color.$lightgray};
  border-top: none;
  border-right: none;
  border-left: none;

  &:focus,
  input:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &:-ms-input-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &:-moz-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &::-moz-placeholder {
    color: #c3c2c2;
    font-size: ${typeface.$copyrightfont};
  }

  margin-bottom: 2.2rem;

  @media (max-width: ${media.mobileL}) {
    width: 20.3125rem;
  }
  @media (max-width: ${media.mobileM}) {
    width: 17.3125rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 15.3125rem;
  }
`;

export const ContactFormTextArea = styled.textarea`
  height: 3.0625rem;
  width: 25.3125rem;

  font-family: ${typeface.poppins};
  font-size: ${typeface.$copyrightfont};
  padding-left: 0.9rem;

  background-color: ${color.$white};

  border-bottom: 1px solid ${color.$lightgray};
  border-top: none;
  border-right: none;
  border-left: none;

  overflow: hidden;

  &:focus,
  input:focus {
    outline: none;
  }

  resize: none;

  &::-webkit-input-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &:-ms-input-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &:-moz-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }
  &::-moz-placeholder {
    color: ${color.$lightgray};
    font-size: ${typeface.$copyrightfont};
  }

  margin-bottom: 2.2rem;

  @media (max-width: ${media.mobileL}) {
    width: 20.3125rem;
  }
  @media (max-width: ${media.mobileM}) {
    width: 17.3125rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 15.3125rem;
  }
`;

export const ContactFormButton = styled.button`
  height: 3.0625rem;
  width: 8rem;

  font-family: ${typeface.poppins};
  font-size: ${typeface.$copyrightfont};

  color: ${color.$white};

  background-color: ${color.$black};

  border: 1px solid ${color.$lightgray};
  border-radius: 5px;

  &:active {
    transform: scale(1.05);
  }

  transition: all 250ms ease-in-out;

  margin-bottom: 4rem;
  margin-top: 0.5rem;

  @media (max-width: ${media.laptopS}) {
    cursor: pointer;
  }
`;

// Error Messages
export const ErrorField = styled.h1`
  font-size: ${typeface.$mqcopyrightfont2};
  font-weight: ${typeface.$medium};
  color: ${color.$red};

  margin-top: -1.8rem;

  text-align: left;
  user-select: none;
`;

// Success Message
export const SuccessField = styled.h1`
  font-size: ${typeface.$mqcopyrightfont1};
  font-weight: ${typeface.$medium};
  color: ${color.$green};

  text-align: left;
  user-select: none;
`;
