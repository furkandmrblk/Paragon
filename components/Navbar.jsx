import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useScrollPosition from '@react-hook/window-scroll';
import {
  Nav,
  NavDiv,
  NavHamburger,
  NavHamburgerDiv,
  NavItemDiv,
  NavItems,
  NavLogo,
  NavMenu,
} from './NavbarS';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (window.location.pathname === '/work') {
      document.getElementById('logo').style.color = '#FDFDFD';
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
    } else if (window.location.pathname === '/contact') {
      document.getElementById('logo').style.color = '#FDFDFD';
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
    } else if (window.location.pathname === '/') {
      document.getElementById('logo').style.color = '#151515';
      if (open) {
        document.getElementById('logo').style.color = '#FDFDFD';
      }
    } else if (window.location.pathname === '/about') {
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
    }
  });

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <NavDiv>
        <Link href="/">
          <NavLogo id="logo" open={open}>
            PARAGON
          </NavLogo>
        </Link>
        <NavHamburgerDiv open={open} onClick={openMenu}>
          <NavHamburger id="hamburger" open={open} />
          <NavHamburger id="hamburger2" open={open} />
        </NavHamburgerDiv>
      </NavDiv>
      <NavMenu open={open}>
        <Link href="/work">
          <NavItemDiv open={open}>
            <NavItems open={open}>Our Work</NavItems>
            <svg
              width="93"
              height="45"
              viewBox="0 0 93 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.3976 24.5341C92.5496 23.3821 92.5496 21.5144 91.3976 20.3624L72.6251 1.58991C71.4732 0.437937 69.6054 0.437937 68.4535 1.58991C67.3015 2.74188 67.3015 4.6096 68.4535 5.76158L85.1401 22.4482L68.4535 39.1349C67.3015 40.2869 67.3015 42.1546 68.4535 43.3066C69.6054 44.4585 71.4732 44.4585 72.6251 43.3066L91.3976 24.5341ZM0.817383 25.3981L89.3118 25.3981V19.4984L0.817383 19.4984L0.817383 25.3981Z"
                fill="#FDFDFD"
              />
            </svg>
          </NavItemDiv>
        </Link>
        <Link href="/about">
          <NavItemDiv open={open}>
            <NavItems open={open}>About Us</NavItems>
            <svg
              width="93"
              height="45"
              viewBox="0 0 93 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.3976 24.5341C92.5496 23.3821 92.5496 21.5144 91.3976 20.3624L72.6251 1.58991C71.4732 0.437937 69.6054 0.437937 68.4535 1.58991C67.3015 2.74188 67.3015 4.6096 68.4535 5.76158L85.1401 22.4482L68.4535 39.1349C67.3015 40.2869 67.3015 42.1546 68.4535 43.3066C69.6054 44.4585 71.4732 44.4585 72.6251 43.3066L91.3976 24.5341ZM0.817383 25.3981L89.3118 25.3981V19.4984L0.817383 19.4984L0.817383 25.3981Z"
                fill="#FDFDFD"
              />
            </svg>
          </NavItemDiv>
        </Link>
        <Link href="/contact">
          <NavItemDiv open={open}>
            <NavItems open={open}>Contact Us</NavItems>
            <svg
              width="93"
              height="45"
              viewBox="0 0 93 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.3976 24.5341C92.5496 23.3821 92.5496 21.5144 91.3976 20.3624L72.6251 1.58991C71.4732 0.437937 69.6054 0.437937 68.4535 1.58991C67.3015 2.74188 67.3015 4.6096 68.4535 5.76158L85.1401 22.4482L68.4535 39.1349C67.3015 40.2869 67.3015 42.1546 68.4535 43.3066C69.6054 44.4585 71.4732 44.4585 72.6251 43.3066L91.3976 24.5341ZM0.817383 25.3981L89.3118 25.3981V19.4984L0.817383 19.4984L0.817383 25.3981Z"
                fill="#FDFDFD"
              />
            </svg>
          </NavItemDiv>
        </Link>
      </NavMenu>
    </Nav>
  );
};
