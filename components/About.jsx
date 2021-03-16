import React from 'react';
import { AboutDiv, AboutIntro, AboutText } from './AboutS';

export const About = () => {
  return (
    <AboutDiv>
      <AboutIntro>
        <AboutText>
          We Transform <br />{' '}
          <span style={{ color: `#6a6a6b32` }}>
            Brands with <br /> Design
          </span>
          .
        </AboutText>
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
            stroke="#8f8f8f"
            strokeWidth="2.13307"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </AboutIntro>
    </AboutDiv>
  );
};
