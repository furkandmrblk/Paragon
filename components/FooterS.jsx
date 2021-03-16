import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Footer
export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${color.$black};
`;

export const FooterLowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${color.$black};

  padding-bottom: 2rem;

  svg {
    height: 1.8rem;
    width: 1rem;

    transform: ${({ open }) => (open ? 'rotate(-90deg)' : 'rotate(90deg)')};
    transition: all 250ms ease-in-out;

    @media (max-width: ${media.laptopS}) {
      cursor: pointer;
    }

    path {
      transition: all 250ms ease-in-out;
    }

    margin-left: 2rem;

    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 1.2rem;
      width: 0.7rem;
    }
    @media (max-width: 550px) {
      height: 1.1rem;
      width: 0.7rem;
    }
  }

  &:hover {
    svg {
      path {
        stroke: #8f8f8f;
      }
    }
  }

  @media (max-width: 550px) {
    padding-bottom: 1rem;
  }
`;

// FooterItems

export const FooterItem = styled.a`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};
  color: ${color.$white};

  user-select: none;

  &:first-child {
    margin-left: 4rem;
  }

  &:last-child {
    margin-right: 4rem;
  }

  margin-top: 15rem;
  margin-bottom: 5rem;

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsmfont1};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsmfont2};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsmfont3};

    &:first-child {
      margin-left: 2rem;
    }

    &:last-child {
      margin-right: 2rem;
    }
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsmfont3};

    &:first-child {
      margin-left: 1rem;
    }

    &:last-child {
      margin-right: 1rem;
    }

    margin-bottom: 2rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqsmfont4};
  }
`;

// Footer Copyright etc.

export const FooterCopyrightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: ${({ open }) => (open ? '4rem' : '0')};
  opacity: ${({ open }) => (open ? '1' : '0')};

  transition: all 250ms ease-in-out;

  padding: 2rem 4rem 0 4rem;

  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    padding: 2rem 2rem 0 2rem;
  }
  @media (max-width: 550px) {
    padding: 2rem 1rem 0 1rem;
  }
`;
export const FooterCopyright = styled.h1`
  font-size: ${typeface.$copyrightfont};
  font-weight: ${typeface.$light};
  color: ${color.$gray};

  user-select: none;

  &:hover {
    color: ${color.$lightgray};
  }

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqcopyrightfont1};

    &:last-child {
      cursor: pointer;
    }
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqcopyrightfont2};
  }
`;
