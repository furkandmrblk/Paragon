import React, { useState } from 'react';
import {
  FooterCopyright,
  FooterCopyrightDiv,
  FooterDiv,
  FooterItem,
  FooterLowerDiv,
} from './FooterS';

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const openAccordion = () => {
    setOpen(!open);
  };

  return (
    <>
      <FooterDiv>
        <FooterItem>INSTAGRAM</FooterItem>
        <FooterItem>BEHANCE</FooterItem>
        <FooterItem>DRIBBBLE</FooterItem>
      </FooterDiv>
      <FooterLowerDiv open={open}>
        <svg
          onClick={openAccordion}
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
            stroke="#6a6a6b32"
            strokeWidth="2.13307"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <FooterCopyrightDiv open={open}>
          <FooterCopyright>©PARAGON 2021</FooterCopyright>
          <FooterCopyright>FASTIGIA RERUM SCIENTIA</FooterCopyright>
          <FooterCopyright>POLICIES</FooterCopyright>
        </FooterCopyrightDiv>
      </FooterLowerDiv>
    </>
  );
};
