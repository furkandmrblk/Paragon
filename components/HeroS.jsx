import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Hero
export const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
// Hero-Background (Right)
export const HeroBackgroundRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${color.$white};

  height: 100vh;
  width: 70vw;

  @media (max-width: ${media.laptopS}) {
    width: 75vw;
  }
  @media (max-width: 550px) {
    width: 80vw;
  }
  @media (max-width: ${media.mobileL}) {
    width: 100vw;
  }
`;

// Hero-Background (Left)
export const HeroBackgroundLeft = styled.div`
  background-color: ${color.$black};

  height: 100vh;
  width: 30vw;

  @media (max-width: ${media.laptopS}) {
    width: 25vw;
  }
  @media (max-width: 550px) {
    width: 20vw;
  }
  @media (max-width: ${media.mobileL}) {
    display: none;
  }
`;

// Hero Right-Side Div
export const HeroRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

// Title
export const HeroTitle = styled.h1`
  font-size: ${typeface.$lgfont};
  font-family: ${typeface.oswald};

  user-select: none;

  margin-right: 5rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqlg1font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqlg2font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqlg3font};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqlg4font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqlg5font};
    margin-right: 2rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqlg5font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqlg6font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqlg7font};
  }
`;

// Line

export const HeroLine = styled.div`
  height: 0;
  width: 12rem;

  background-color: ${color.$gray};
  border: 0.5px solid ${color.$gray};
  border-radius: 5px;

  margin-top: 2rem;
`;

// Intro

export const IntroScreen = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.$black};

  white-space: nowrap;

  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const IntroTitle = styled.h1`
  font-size: ${typeface.$mdfont};
  color: ${color.$white};

  text-align: left;

  user-select: none;

  opacity: 0;

  margin-top: 4.375rem;

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
    font-size: ${typeface.$mqmd6font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd8font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd9font};
  }
`;
