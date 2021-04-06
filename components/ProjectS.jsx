import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Project Container
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$black};
  color: ${color.$white};

  min-height: 100vh;

  padding: 11rem 7rem 5rem 7rem;
`;

// Project Title
export const ProjectTitle = styled.div`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};

  margin-bottom: 1rem;
`;

// Project MainImage
export const ProjectMainImage = styled.img`
  object-fit: cover;

  height: 750px;
  width: 1400px;

  margin-bottom: 2rem;
`;

// Project MainText
export const ProjectMainText = styled.h1`
  font-size: ${typeface.$text};
  font-weight: ${typeface.$light};
  text-align: justify;
  max-width: 1100px;

  margin-bottom: 15rem;
`;

// BottomDiv
export const ProjectBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 87.4rem;

  margin-bottom: 10rem;
`;

// Project Image
export const ProjectImage = styled.img`
  object-fit: cover;

  height: 485px;
  width: 570px;
`;

// Project Text
export const ProjectText = styled.h1`
  font-size: ${typeface.$text};
  font-weight: ${typeface.$light};
  text-align: justify;
  max-width: 35rem;
`;
