import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Nav,
  NavDiv,
  NavHamburger,
  NavItem,
  NavItemDiv,
  NavItemInnerDiv,
  NavItemLine,
  NavItems,
  NavLink,
  NavMenu,
  NavMenuLeft,
  NavMenuRight,
  NavNumber,
} from './NavbarS';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (window.location.pathname === '/work') {
    } else if (window.location.pathname === '/contact') {
      document.getElementById('hamburger').style.backgroundColor = '#151515';

      if (open === true) {
        document.getElementById('hamburger').style.backgroundColor = '#FDFDFD';
      } else if (open === false) {
        document.getElementById('hamburger').style.backgroundColor = '#151515';
      }
    } else if (window.location.pathname === '/about') {
      document.getElementById('hamburger').style.backgroundColor = '#151515';
      if (open === true) {
        document.getElementById('hamburger').style.backgroundColor = '#FDFDFD';
      } else if (open === false) {
        document.getElementById('hamburger').style.backgroundColor = '#151515';
      }
    }
  });

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <NavDiv>
        <NavHamburger id="hamburger" open={open} onClick={openMenu} />
      </NavDiv>
      <NavMenu open={open}>
        <NavMenuLeft>
          <NavItemDiv>
            <NavItem>POCKET</NavItem>
            <NavNumber>00</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>CRUMB</NavItem>
            <NavNumber>01</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>SMILE SPACE</NavItem>
            <NavNumber>02</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>WWF</NavItem>
            <NavNumber>03</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>OXXO</NavItem>
            <NavNumber>04</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>INMEDIC</NavItem>
            <NavNumber>05</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>VAREGA</NavItem>
            <NavNumber>06</NavNumber>
          </NavItemDiv>
          <NavItemDiv>
            <NavItem>PIE</NavItem>
            <NavNumber>07</NavNumber>
          </NavItemDiv>
        </NavMenuLeft>
        <NavMenuRight>
          <Link href="/">
            <NavLink data-text="HOME">HOME</NavLink>
          </Link>
          <Link href="/about">
            <NavLink data-text="ABOUT">ABOUT</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink data-text="CONTACT">CONTACT</NavLink>
          </Link>
        </NavMenuRight>
      </NavMenu>
    </Nav>
  );
};
