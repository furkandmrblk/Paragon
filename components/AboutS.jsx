import styled, { keyframes } from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { motion } from 'framer-motion';
import { media } from '../theme/MediaQueries';

// About Container
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0rem 3.75rem;

  @media (max-width: ${media.mobileL}) {
    padding: 0rem 2.5rem;
  }
`;

export const AboutLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  height: 100vh;
`;

// About Text
export const AboutText = styled(motion.h1)`
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
  @media (max-width: ${media.mobileM}) {
    max-width: 13rem;
  }
`;

// About Subtitle
export const AboutSubtitle = styled(motion.h1)`
  font-size: ${typeface.$subtitle};
  font-weight: ${typeface.$light};
  color: ${color.$gray};

  margin-top: 4.375rem;

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsubtitle1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsubtitle2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsubtitle3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsubtitle4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsubtitle5font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsubtitle6font};
  }
`;

// About Socials
export const AboutSocialsDiv = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
`;

export const AboutSocials = styled(motion.a)`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};

  &:first-child {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${color.$lightgray};
  }

  transition: color 300ms ease-in-out;

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
`;
