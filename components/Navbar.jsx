import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  MainBox,
  MobileItemDiv,
  MobileSliderDiv,
  Nav,
  NavDiv,
  NavHamburger,
  NavItem,
  NavItemDiv,
  NavLink,
  NavMenu,
  NavMenuLeft,
  NavMenuRight,
  NavNumber,
  ProBox,
} from './NavbarS';

export const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const titles = props.props;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (window.location.pathname === '/contact') {
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

    let counter = 0;
    let proCount = 0;
    const mainBox = document.getElementById('mainbox');

    window.addEventListener('wheel', function (e) {
      const delta = e.deltaY;
      if (delta < 0) {
        counter += 22.5;
        proCount += 1;
        mainBox.setAttribute('style', 'transform: rotate(' + counter + 'deg)');
      } else if (delta > 0) {
        counter -= 22.5;
        proCount -= 1;
        mainBox.setAttribute('style', 'transform: rotate(' + counter + 'deg)');
      }
    });
  });

  const openMenu = () => {
    setOpen(!open);
  };

  const openDelayMenu = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 150);
  };

  return (
    <Nav>
      <NavDiv>
        <NavHamburger id="hamburger" open={open} onClick={openMenu} />
      </NavDiv>
      <NavMenu open={open}>
        <NavMenuLeft>
          <MainBox id="mainbox" open={open}>
            {titles.map((title) => (
              <ProBox key={title.sys.id}>
                <Link href={'/work/' + title.fields.slug}>
                  <NavItemDiv onClick={openDelayMenu}>
                    <NavItem>{title.fields.title}</NavItem>
                    <NavNumber>{title.fields.projectNumber}</NavNumber>
                  </NavItemDiv>
                </Link>
              </ProBox>
            ))}
          </MainBox>
          <MobileSliderDiv>
            {titles.map((title) => (
              <Link href={'/work/' + title.fields.slug} key={title.sys.id}>
                <MobileItemDiv onClick={openDelayMenu}>
                  <NavItem>{title.fields.title}</NavItem>
                  <NavNumber>{title.fields.projectNumber}</NavNumber>
                </MobileItemDiv>
              </Link>
            ))}
          </MobileSliderDiv>
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
