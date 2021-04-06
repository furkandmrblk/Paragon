import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// 404
export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: ${color.$black};
`;

// Error Message
export const ErrorNumber = styled.h1`
  font-size: ${typeface.$mqmd5font};
  font-weight: ${typeface.$medium};

  color: ${color.$white};
`;

export const ErrorMessage = styled.h1`
  font-size: ${typeface.$mqmd4font};
  font-weight: ${typeface.$medium};

  text-align: center;

  color: ${color.$white};
`;

// Back to Homepage

export const ErrorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  width: 20rem;

  background-color: ${color.$white};
  border: 1.5px solid ${color.$black};

  font-family: ${typeface.poppins};
  font-size: ${typeface.$subtitle};
  text-align: center;

  margin-top: 1rem;

  @media (max-width: ${media.laptopS}) {
    cursor: pointer;
  }
  cursor: none;

  &:active {
    transform: scale(1.02);
  }

  &:hover {
    background-color: ${color.$black};
    border: 1.5px solid ${color.$white};

    color: ${color.$white};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsubtitle1font};

    height: 4.5rem;
    width: 18rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsubtitle2font};

    height: 4.5rem;
    width: 16rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsubtitle3font};

    height: 4.2rem;
    width: 15rem;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsubtitle4font};

    height: 4rem;
    width: 13rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsubtitle5font};

    height: 3.5rem;
    width: 10.2rem;
  }
`;
