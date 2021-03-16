import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Project
export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${color.$black};

  min-height: 100vh;
`;

// Project Title

export const ProjectTitle = styled.h1`
  font-size: ${typeface.$mqlg1font};
  font-weight: ${typeface.$medium};

  text-align: center;

  color: ${color.$white};

  user-select: none;

  margin-top: 10rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqlg2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqlg3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqlg4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqlg5font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqlg6font};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqlg7font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqlg8font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqlg9font};
  }
`;

// ProjectInnerDiv
export const ProjectInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10rem;
  width: 75vw;
`;

// Project Description
export const ProjectDescription = styled.h1`
  font-size: ${typeface.$copyrightfont};
  font-weight: 300;

  color: ${color.$white};

  text-align: justify;

  max-width: 40rem;
`;

// Project Image

export const ProjectImage = styled.img`
  object-fit: contain;
  height: 20rem;
  width: 40rem;
`;
