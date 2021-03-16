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
  align-items: flex-start;

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

// Title
export const HeroTitle = styled.h1`
  font-size: ${typeface.$lgfont};
  font-family: ${typeface.oswald};

  user-select: none;

  margin-top: -6rem;
  margin-left: 3.6rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqlg1font};
    margin-top: -5rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqlg2font};
    margin-top: -4rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqlg3font};
    margin-top: -3rem;
    margin-left: 3.7rem;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqlg4font};
    margin-top: -2.5rem;
    margin-left: 1.85rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqlg5font};
    margin-top: -2.3rem;
    margin-left: 0.9rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqlg5font};
    margin-top: -2rem;
    margin-left: 0rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqlg6font};
    margin-top: -2rem;
    margin-left: 0.9rem;
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqlg7font};
    margin-top: -1.5rem;
  }
`;

// TitleWrap
export const HeroTitleWrap = styled.h1`
  font-size: ${typeface.$mdfont};

  color: transparent;
  -webkit-text-stroke: 1.2px ${color.$black};

  user-select: none;

  margin-left: 4rem;

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
    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqmd5font};
    margin-left: 1rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd7font};
    margin-left: 1rem;
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd6font};
  }
`;

// Button

export const HeroButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  width: 20rem;

  user-select: none;

  background-color: ${color.$white};
  border: 1.5px solid ${color.$black};

  font-family: ${typeface.poppins};
  font-size: ${typeface.$textfont};
  text-align: center;

  svg {
    height: 1.1rem;
    width: 0.7rem;

    margin-left: 1rem;

    path {
      transition: all 350ms ease-in-out;
    }

    @media (max-width: ${media.laptopM}) {
      height: 1rem;
      width: 0.5rem;
    }
    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 0.7rem;
      width: 0.45rem;
    }
    @media (max-width: 550px) {
      height: 0.7rem;
      width: 0.4rem;
    }
  }

  @media (max-width: ${media.laptopS}) {
    cursor: pointer;
  }
  cursor: none;

  &:active {
    transform: scale(1.02);
  }

  &:hover {
    background-color: ${color.$black};

    color: ${color.$white};

    svg {
      path {
        stroke: ${color.$white};
      }
    }
  }

  transition: all 350ms ease-in-out;

  margin-left: 4rem;
  margin-top: 5rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqtext1font};

    height: 4.5rem;
    width: 18rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqtext2font};

    height: 4.5rem;
    width: 16rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqtext3font};

    height: 4.2rem;
    width: 15rem;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqtext4font};

    height: 4rem;
    width: 13rem;

    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqtext5font};

    height: 3.5rem;
    width: 10.2rem;

    margin-left: 1rem;
  }
`;

// Line

export const HeroLine = styled.div`
  height: 0;
  width: 10rem;

  background-color: ${color.$gray};
  border: 1px solid ${color.$gray};
  border-radius: 5px;

  margin-left: 4rem;
  margin-top: 2rem;

  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    margin-left: 1rem;
  }
`;

// Intro

export const IntroScreen = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$black};

  white-space: nowrap;

  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const IntroTitle = styled.h1`
  font-size: ${typeface.$mdfont};
  color: ${color.$white};

  text-align: center;

  user-select: none;

  opacity: 0;

  margin-top: 20rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqmd1font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqmd2font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqmd3font};
    margin-top: 17rem;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqmd4font};
    margin-top: 15rem;
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
