import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Work
export const WorkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-height: 100vh;

  background-color: ${color.$black};
`;

// Title
export const WorkTitle = styled.a`
  font-size: ${typeface.$mqlg1font};
  font-weight: ${typeface.$medium};

  color: ${color.$white};
  user-select: none;

  max-width: 55rem;

  &:first-child {
    margin-top: 10rem;
  }

  margin-bottom: 10rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqlg3font};
    max-width: 45rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqlg3font};
    max-width: 35rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqlg4font};
    max-width: 25rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqlg6font};
    max-width: 25rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqlg8font};
    max-width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqmd5font};
    max-width: 18rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd6font};
    max-width: 13rem;
  }
`;
