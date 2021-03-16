import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';
import Link from 'next/link';
import {
  HeroBackgroundRight,
  HeroBackgroundLeft,
  HeroButton,
  HeroDiv,
  HeroLine,
  HeroTitle,
  HeroTitleWrap,
  IntroScreen,
  IntroTitle,
} from './HeroS';

export const Hero = () => {
  let Intro = useRef(null);
  let IntroText = useRef(null);

  useEffect(() => {
    TweenMax.to(IntroText, 1.5, {
      opacity: 1,
      y: -70,
      ease: Power3.easeOut,
    }).then(() => {
      TweenMax.to(IntroText, 0.7, {
        opacity: 0,
        display: 'none',
        ease: Power3.easeOut,
      });
    });

    const IntroEffect = () => {
      TweenMax.to(Intro, 2.5, {
        width: 0,
        ease: Power3.easeOut,
        display: 'none',
      });
    };
    gsap.delayedCall(1.7, IntroEffect);
  }, []);

  return (
    <HeroDiv>
      <IntroScreen ref={(el) => (Intro = el)}>
        <IntroTitle ref={(el) => (IntroText = el)}>
          WE BUILD PRODUCTS <br /> THAT{' '}
          <span
            style={{ color: 'transparent', WebkitTextStroke: '0.6px #FDFDFD' }}
          >
            STAND OUT
          </span>
        </IntroTitle>
      </IntroScreen>
      <HeroBackgroundRight>
        <HeroTitleWrap>HEY! WE ARE</HeroTitleWrap>
        <HeroTitle>PARAGON</HeroTitle>
        <HeroLine />
        <Link href="/about">
          <HeroButton>
            Learn about us
            <svg
              width="14"
              height="23"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
                stroke="#333333"
                strokeWidth="2.13307"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HeroButton>
        </Link>
      </HeroBackgroundRight>

      <HeroBackgroundLeft />
    </HeroDiv>
  );
};
