import styled, { keyframes } from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// About
export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// About Intro

const scrollAnimation = keyframes`
  0%, 100% {
        transform: translate(0, 0) rotate(90deg);
    }
    50% {
        transform: translate(0, 15px) rotate(90deg);
    }
`;

export const AboutIntro = styled.div`
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

// About Intro Text
export const AboutText = styled.h1`
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
