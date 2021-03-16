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
  justify-content: space-between;
  align-items: center;

  width: 100vw;

  padding: 1.5rem 0 0 0;
`;

// Logo
export const NavLogo = styled.h1`
  font-size: ${typeface.$smfont};
  font-family: ${typeface.oswald};
  color: ${color.$white};

  cursor: none;
  user-select: none;

  transition: color 500ms ease-in-out;

  @media (max-width: ${media.laptopS}) {
    cursor: pointer;
  }

  margin-left: 4rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsmfont1};
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsmfont2};
    margin-left: 2rem;
  }
  @media (max-width: 550px) {
    margin-left: 1rem;
  }
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
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${color.$black};

  height: 100vh;
  width: ${({ open }) => (open ? '100vw' : '0vw')};

  transition: all 800ms ease-in-out;

  top: 0;
`;

// NavItems

export const NavItems = styled.h1`
  font-size: ${typeface.$mdfont};
  font-weight: ${typeface.$medium};
  color: ${color.$white};

  white-space: nowrap;
  user-select: none;

  display: ${({ open }) => (open ? 'visible' : 'none')};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  transition: all 350ms ease-in-out;

  margin-left: 4rem;

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
    margin-left: 1rem;
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

export const NavItemDiv = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75vw;

  &:first-child {
    margin-top: 10.3125rem;
  }

  svg {
    height: 6rem;
    width: 12.5rem;

    display: ${({ open }) => (open ? 'block' : 'none')};

    @media (max-width: ${media.laptopL}) {
      height: 5.5rem;
      width: 11.5rem;
    }

    @media (max-width: ${media.laptopM}) {
      height: 4rem;
      width: 8.5rem;
      margin-bottom: 2rem;
    }

    @media (max-width: ${media.laptopS}) {
      height: 3rem;
      width: 6.1rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      height: 2rem;
      width: 4rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 550px) {
      height: 1.7rem;
      width: 3.6rem;
      margin-bottom: 2rem;
    }
    @media (max-width: ${media.mobileM}) {
      margin-bottom: 2.3rem;
    }
    @media (max-width: ${media.mobileS}) {
      height: 1.5rem;
      width: 3.2rem;
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
        fill: #8f8f8f;
      }
    }
  }

  @media (max-width: 550px) {
    width: 85vw;
  }
`;
