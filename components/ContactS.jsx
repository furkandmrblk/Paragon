import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { motion } from 'framer-motion';
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

  @media (max-width: ${media.mobileL}) {
    padding: 0rem 2.5rem;
  }
`;

// Contact Text
export const ContactText = styled(motion.h1)`
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

// Contact Socials
export const ContactSocialsDiv = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3.75rem;

  @media (max-width: ${media.tablet}) {
    margin-bottom: 5rem;
  }
`;

export const ContactSocials = styled(motion.a)`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};
  color: ${color.$black};

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
  @media (max-width: ${media.mobileM}) {
    max-width: 13rem;
  }
`;
