import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Nav
export const Nav = styled.div`
  z-index: 100;
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

  transition: background-color 500ms ease-in-out;

  @media (max-width: 550px) {
    margin-right: 2.2rem;

    &:hover {
      background-color: ${color.$white};
    }
  }
  @media (max-width: ${media.mobileL}) {
    margin-right: 1.5rem;
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

  min-height: 100vh;
  width: ${({ open }) => (open ? '100vw' : '0vw')};

  transition: all 800ms ease-in-out;

  top: 0;

  @media (max-width: ${media.tablet}) {
    align-items: flex-start;
  }
`;

export const NavMenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 100vh;
  width: 70vw;

  @media (max-width: ${media.tablet}) {
    position: relative;
    align-items: center;
  }
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

  @media (max-width: ${media.tablet}) {
    position: fixed;
    right: 0;
    height: 100vh;

    margin-right: 0rem;
    margin-bottom: 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    margin-right: 0rem;
  }
`;

export const NavItem = styled.a`
  font-size: ${typeface.$smfont};
  color: ${color.$white};

  transition: all 350ms ease-in-out;

  margin-right: 1rem;

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsm1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsm2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsm3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsm4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsm3font};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqsm4font};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqsm5font};
  }
`;

export const NavNumber = styled.a`
  font-size: ${typeface.$number};

  color: ${color.$white};

  transition: all 350ms ease-in-out;

  margin-bottom: 1rem;

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqnumber1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqnumber2font};
    margin-bottom: 0.7rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqnumber3font};
    margin-bottom: 0.6rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqnumber4font};
    margin-bottom: 0.4rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqnumber5font};
    margin-bottom: 0.15rem;
  }
`;

export const NavItemDiv = styled.div`
  position: absolute;

  left: 0;

  display: flex;
  align-items: flex-end;

  width: 150%;
  margin-left: 10rem;

  &:not(:last-child) {
    margin-bottom: 0rem;
  }

  &:hover {
    ${NavItem} {
      color: ${color.$lightgray};
    }
    ${NavNumber} {
      color: ${color.$lightgray};
    }
  }

  @media (max-width: ${media.laptopS}) {
    margin-left: 11rem;
  }
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

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsubtitle1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsubtitle2font};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsubtitle3font};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsubtitle4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsubtitle5font};
    margin-right: 4rem;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 550px) {
    margin-right: 2.2rem;
  }
  @media (max-width: ${media.mobileL}) {
    margin-right: 1.5rem;
  }
`;

// Experiment
export const MainBox = styled.div`
  position: relative;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 0px;
  height: 0px;
  background-color: ${color.$white};
  transition: all 0.7s ease-out;

  margin-left: -22.5rem;
  @media (max-width: ${media.laptopS}) {
    margin-left: -23.5rem;
  }
  @media (max-width: ${media.tablet}) {
    display: none;
  }
`;

export const ProBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-blend-mode: darken;
  /* background-color: rgba(0, 0, 0, 0.8); */
  left: 0;
  top: 0;

  margin: 0;

  &:nth-child(1) {
    transform: translate(90%, -50%) rotate(0deg); // -22.5
  }
  &:nth-child(2) {
    transform: translate(77.5%, -102.5%) rotate(-22.5deg); // -52.5
  }
  &:nth-child(3) {
    transform: translate(50%, -145%) rotate(-45deg); // -52.5
  }
  &:nth-child(4) {
    transform: translate(5.5%, -178.5%) rotate(-67.5deg); // -52.5% -22.5%
  }
  &:nth-child(5) {
    transform: translate(-50%, -187.5%) rotate(-90deg); // +52.5
  }
  &:nth-child(6) {
    transform: translate(-102.5%, -177.5%) rotate(-112.5deg); // +52.5
  }
  &:nth-child(7) {
    transform: translate(-148.5%, -148.5%) rotate(-135deg); // + 52.5
  }
  &:nth-child(8) {
    transform: translate(-177.5%, -102.5%) rotate(-157.5deg); // +22.5
  }
  &:nth-child(9) {
    transform: translate(-190%, -50%) rotate(-180deg); // +22.5
  }
  &:nth-child(10) {
    transform: translate(-177.5%, 2.5%) rotate(-202.5deg); // -22.5
  }
  &:nth-child(11) {
    transform: translate(-148.5%, 48.5%) rotate(-225deg); // -52.5
  }
  &:nth-child(12) {
    transform: translate(-102.5%, 77.5%) rotate(-247.5deg); // -52.5
  }
  &:nth-child(13) {
    transform: translate(-50%, 90%) rotate(-270deg); // -52.5
  }
  &:nth-child(14) {
    transform: translate(2.5%, 77.5%) rotate(-292.5deg); // + 52.5
  }
  &:nth-child(15) {
    transform: translate(48.5%, 48.5%) rotate(-315deg); // 52.5
  }
  &:nth-child(16) {
    transform: translate(77.5%, 2.5%) rotate(-337.5deg);
  }

  @media (max-width: ${media.tablet}) {
    width: 350px;
    height: 350px;
  }
`;

// Mobile Slider

export const MobileSliderDiv = styled.div`
  display: none;
  @media (max-width: ${media.tablet}) {
    position: absolute;
    top: 0;

    height: 75vh;
    width: 50vw;

    display: flex;
    align-items: flex-start;

    overflow: hidden;
    white-space: nowrap;

    margin-top: 10rem;
  }
`;

export const MobileInnerSliderDiv = styled.div`
  display: none;
  @media (max-width: ${media.tablet}) {
    position: absolute;
    top: 0;
    height: 100%;

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
    color: ${color.$white};

    white-space: nowrap;
  }
`;

export const MobileItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:not(:first-child) {
    margin-bottom: 1rem;
  }
`;
