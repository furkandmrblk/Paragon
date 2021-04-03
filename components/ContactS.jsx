import styled, { keyframes } from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Contact Container
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  height: 100vh;
  width: 100vw;

  padding: 0rem 3.75rem;
`;

// Contact Text
export const ContactText = styled.h1`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsm1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsm2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsm3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsm4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsm5font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsm6font};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqsm7font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqsm8font};
  }
`;

// Contact Socials
export const ContactSocialsDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${media.mobileL}) {
    margin-bottom: 1rem;
  }
`;

export const ContactSocials = styled.a`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 300ms ease-in-out;

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsm1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsm2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsm3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsm4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsm5font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsm6font};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqsm7font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqsm8font};
  }
`;
