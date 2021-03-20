import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useScrollPosition from '@react-hook/window-scroll';
import {
  Nav,
  NavDiv,
  NavHamburger,
  NavHamburgerDiv,
  NavItemDiv,
  NavItemInnerDiv,
  NavItemLine,
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
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger').style.border = '1px solid#FDFDFD';
      document.getElementById('hamburger2').style.border = '1px solid#FDFDFD';
    } else if (window.location.pathname === '/contact') {
      if (open === true) {
        document.getElementById('hamburger').style.border = '1px solid#fdfdfd';
        document.getElementById('hamburger2').style.border = '1px solid#fdfdfd';
      } else if (open === false) {
        document.getElementById('hamburger').style.border = '1px solid#151515';
        document.getElementById('hamburger2').style.border = '1px solid#151515';
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
        <NavHamburgerDiv open={open} onClick={openMenu}>
          <NavHamburger id="hamburger" open={open} />
          <NavHamburger id="hamburger2" open={open} />
        </NavHamburgerDiv>
      </NavDiv>
      <NavMenu open={open}>
        <Link href="/work">
          <NavItemDiv>
            <NavItemLine open={open} />
            <NavItemInnerDiv open={open}>
              <NavItems open={open}>work</NavItems>
              <svg
                width="93"
                height="45"
                viewBox="0 0 93 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4227 25.8019L83.2763 24.9483H82.0692L1.31738 24.9483L1.31738 19.9483L82.0692 19.9483H83.2763L82.4227 19.0948L68.4521 5.12421C67.4758 4.1479 67.4758 2.56499 68.4521 1.58868C69.4285 0.612368 71.0114 0.612368 71.9877 1.58868L91.0796 20.6806C92.0559 21.6569 92.0559 23.2398 91.0796 24.2161L71.9877 43.308C71.0114 44.2843 69.4285 44.2843 68.4521 43.308C67.4758 42.3317 67.4758 40.7488 68.4521 39.7724L82.4227 25.8019Z"
                  stroke="#FDFDFD"
                />
              </svg>
            </NavItemInnerDiv>
          </NavItemDiv>
        </Link>
        <Link href="/about">
          <NavItemDiv>
            <NavItemLine open={open} />
            <NavItemInnerDiv open={open}>
              <NavItems open={open}>about</NavItems>
              <svg
                width="93"
                height="45"
                viewBox="0 0 93 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4227 25.8019L83.2763 24.9483H82.0692L1.31738 24.9483L1.31738 19.9483L82.0692 19.9483H83.2763L82.4227 19.0948L68.4521 5.12421C67.4758 4.1479 67.4758 2.56499 68.4521 1.58868C69.4285 0.612368 71.0114 0.612368 71.9877 1.58868L91.0796 20.6806C92.0559 21.6569 92.0559 23.2398 91.0796 24.2161L71.9877 43.308C71.0114 44.2843 69.4285 44.2843 68.4521 43.308C67.4758 42.3317 67.4758 40.7488 68.4521 39.7724L82.4227 25.8019Z"
                  stroke="#FDFDFD"
                />
              </svg>
            </NavItemInnerDiv>
          </NavItemDiv>
        </Link>
        <Link href="/contact">
          <NavItemDiv>
            <NavItemLine open={open} />
            <NavItemInnerDiv open={open}>
              <NavItems open={open}>contact</NavItems>
              <svg
                width="93"
                height="45"
                viewBox="0 0 93 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4227 25.8019L83.2763 24.9483H82.0692L1.31738 24.9483L1.31738 19.9483L82.0692 19.9483H83.2763L82.4227 19.0948L68.4521 5.12421C67.4758 4.1479 67.4758 2.56499 68.4521 1.58868C69.4285 0.612368 71.0114 0.612368 71.9877 1.58868L91.0796 20.6806C92.0559 21.6569 92.0559 23.2398 91.0796 24.2161L71.9877 43.308C71.0114 44.2843 69.4285 44.2843 68.4521 43.308C67.4758 42.3317 67.4758 40.7488 68.4521 39.7724L82.4227 25.8019Z"
                  stroke="#FDFDFD"
                />
              </svg>
            </NavItemInnerDiv>
          </NavItemDiv>
        </Link>
      </NavMenu>
    </Nav>
  );
};
