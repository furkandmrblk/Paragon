import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Nav
export const Nav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`;

export const NavDiv = styled.div`
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;

  padding: 1.5rem 0 0 0;
`;

// Hamburger

export const NavHamburger = styled.div`
  height: 0px;
  width: 2rem;

  border: 1px solid ${color.$white};
  background-color: ${color.$white};

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.mobileL}) {
    border: ${({ open }) =>
      open ? `1px solid ${color.$white}` : `1px solid ${color.$black};`};
    background-color: ${({ open }) =>
      open ? `${color.$white}` : `${color.$black};`};
  }
`;

export const NavHamburgerDiv = styled.a`
  display: flex;
  flex-direction: column;

  margin-right: 4rem;

  ${NavHamburger} {
    &:first-child {
      transform: ${({ open }) =>
        open ? 'rotate(45deg) translate(4px, 8px)' : ''};
    }

    &:last-child {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg) translate(0px, -4px)' : ''};
    }
  }

  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    margin-right: 2rem;
  }
  @media (max-width: 550px) {
    margin-right: 1rem;
  }
`;

// NavMenu
export const NavMenu = styled.div`
  z-index: 10;
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'hidden')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$black};

  height: 100vh;
  width: ${({ open }) => (open ? '100vw' : '0vw')};

  transition: all 800ms ease-in-out;

  top: 0;

  @media (max-width: ${media.tablet}) {
    justify-content: flex-start;
  }
`;

// NavItems

export const NavItems = styled.h1`
  font-size: ${typeface.$mdfont};
  font-weight: ${typeface.$light};
  color: ${color.$white};

  white-space: nowrap;
  user-select: none;

  display: ${({ open }) => (open ? 'visible' : 'none')};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

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
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqmd6font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd7font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd9font};
  }
`;

export const NavItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  padding: 0 4rem;

  @media (max-width: ${media.tablet}) {
    padding: 0 2rem;

    &:first-child {
      margin-top: 5rem;
    }
  }
`;

export const NavItemLine = styled.div`
  display: ${({ open }) => (open ? 'visible' : 'none')};
  height: 0;
  width: 90vw;

  border: 0.5px solid ${color.$white};
`;

export const NavItemInnerDiv = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;

  &:first-child {
    margin-top: 10.3125rem;
  }

  svg {
    height: 2.5rem;
    width: 6rem;
    margin-bottom: 2rem;

    display: ${({ open }) => (open ? 'block' : 'none')};

    @media (max-width: ${media.laptopM}) {
      height: 2.2rem;
      width: 6rem;
    }

    @media (max-width: ${media.laptopS}) {
      height: 2rem;
      width: 5rem;
    }
    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 1.5rem;
      width: 3rem;
    }
    @media (max-width: 550px) {
      height: 1.2rem;
      width: 2.5rem;
    }

    path {
      transition: all 350ms ease-in-out;
    }
  }

  &:hover {
    ${NavItems} {
      color: ${color.$lightgray};
    }

    svg {
      path {
        stroke: #8f8f8f;
      }
    }
  }

  @media (max-width: 550px) {
    width: 85vw;
  }
`;
