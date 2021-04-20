import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  MainBox,
  MobileInnerSliderDiv,
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

    const NavLeft = document.getElementById('navleft');

    if (open === true) {
      setTimeout(() => {
        NavLeft.style.overflow = '';
      }, 1000);
    } else {
      NavLeft.style.overflow = 'hidden';
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

    // Mobile Slider
    const mobileSlider = document.getElementById('mobileSlider');
    const mobileInnerSlider = document.getElementById('mobileInnerSlider');

    let pressed = false;
    let startY;
    let y;

    mobileSlider.addEventListener('touchstart', (e) => {
      pressed = true;
      e.offsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;
      startY = e.offsetY - mobileInnerSlider.offsetTop;
    });
    window.addEventListener('touchend', () => {
      pressed = false;
    });
    mobileSlider.addEventListener('touchmove', (e) => {
      if (!pressed) return;
      e.preventDefault();
      e.offsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;
      y = e.offsetY;

      mobileInnerSlider.style.top = `${y - startY}px`;

      // checkBoundary();
    });

    function checkBoundary() {
      let outer = mobileSlider.getBoundingClientRect();
      let inner = mobileInnerSlider.getBoundingClientRect();

      if (parseInt(mobileInnerSlider.style.top) > 0) {
        mobileInnerSlider.style.top = '0px';
      } else if (inner.bottom < outer.bottom) {
        mobileInnerSlider.style.top = `-${inner.height - outer.height}px`;
      }
    }
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
        <NavMenuLeft id="navleft">
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
          <MobileSliderDiv id="mobileSlider">
            <MobileInnerSliderDiv id="mobileInnerSlider">
              {titles.map((title) => (
                <Link href={'/work/' + title.fields.slug} key={title.sys.id}>
                  <MobileItemDiv onClick={openDelayMenu}>
                    <NavItem>{title.fields.title}</NavItem>
                    <NavNumber>{title.fields.projectNumber}</NavNumber>
                  </MobileItemDiv>
                </Link>
              ))}
            </MobileInnerSliderDiv>
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
