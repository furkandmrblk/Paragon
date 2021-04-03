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

  padding: 4.375rem 0 0 0;
`;

export const NavHamburger = styled.a`
  display: flex;

  height: 1.5rem;
  width: 1.5rem;

  background-color: ${color.$white};
  border-radius: 50%;

  margin-right: 4rem;

  &:hover {
    background-color: ${color.$lightgray};
  }

  transition: all 500ms ease-in-out;

  @media (max-width: 550px) {
    margin-right: 2.2rem;
  }
  @media (max-width: ${media.mobileL}) {
    background-color: ${({ open }) =>
      open ? `${color.$white}` : `${color.$black}`};
  }
`;

// NavMenu
export const NavMenu = styled.div`
  z-index: 10;
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'hidden')};
  align-items: center;

  background-color: ${color.$black};

  height: 100vh;
  width: ${({ open }) => (open ? '100vw' : '0vw')};

  transition: all 800ms ease-in-out;

  top: 0;

  @media (max-width: ${media.tablet}) {
    justify-content: flex-start;
  }
`;

export const NavMenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;
  width: 70vw;
`;

export const NavMenuRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  height: 100vh;
  width: 30vw;

  margin-right: 3rem;
  margin-bottom: 8rem;
`;

export const NavItemDiv = styled.div`
  display: flex;
  align-items: flex-end;

  &:not(:last-child) {
    margin-bottom: 0rem;
  }

  margin-left: 3rem;
`;

export const NavItem = styled.a`
  font-size: ${typeface.$smfont};
  color: ${color.$white};

  margin-right: 1rem;
`;

export const NavNumber = styled.a`
  font-size: 2rem;

  color: ${color.$white};

  margin-bottom: 1rem;
`;

export const NavLink = styled.a`
  font-size: ${typeface.$subtitle};

  color: transparent;
  -webkit-text-stroke: 0.5px ${color.$white};

  &::before {
    position: absolute;

    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    content: attr(data-text);
    transition: max-width 1.2s ease-in-out;
    -webkit-text-fill-color: ${color.$white};
    max-width: 0;
  }
  &:hover:before {
    max-width: 100%;
  }
`;
