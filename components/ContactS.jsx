import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Contact
export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${color.$black};
`;

// Contact Button

export const ContactForm = styled.a`
  font-size: ${typeface.$mdfont};

  color: ${color.$white};

  user-select: none;

  transition: all 350ms ease-in-out;

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
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd7font};
  }
`;

export const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: none;

  svg {
    height: 5rem;
    width: 3rem;

    path {
      transition: all 350ms ease-in-out;
    }

    margin-left: 3rem;

    @media (max-width: ${media.laptopL}) {
      height: 4.5rem;
      width: 2.5rem;
    }
    @media (max-width: ${media.laptopM}) {
      height: 3.5rem;
      width: 2rem;
    }
    @media (max-width: ${media.laptopS}) {
      height: 3rem;
      width: 1.6rem;
      margin-left: 2rem;
    }
    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 2.3rem;
      width: 1.4rem;
      margin-left: 2rem;
    }
    @media (max-width: 550px) {
      height: 2.1rem;
      width: 1.3rem;
      margin-left: 2rem;
    }
    @media (max-width: ${media.mobileS}) {
      height: 1.8rem;
      width: 1rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: ${media.laptopS}) {
    cursor: pointer;
  }

  &:hover {
    ${ContactForm} {
      color: ${color.$lightgray};
    }
    svg {
      path {
        stroke: #8f8f8f;
      }
    }
  }

  margin-left: 4rem;
  margin-top: 15rem;

  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    margin-left: 1rem;
  }
`;

// Contact Line
export const ContactLine = styled.div`
  height: 0;
  width: 26rem;

  background-color: ${color.$white};
  border: 1px solid ${color.$white};
  border-radius: 5px;

  margin-left: 4rem;
  margin-top: 10rem;

  @media (max-width: ${media.laptopM}) {
    width: 21.5rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 17rem;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    width: 13.5rem;
    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    width: 13rem;
    margin-left: 1rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 10.5rem;
  }
`;
