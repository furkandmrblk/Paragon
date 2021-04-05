import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';
import {
  HeroBackgroundRight,
  HeroBackgroundLeft,
  HeroDiv,
  HeroRightDiv,
  HeroLine,
  HeroTitle,
  IntroScreen,
  IntroTitle,
  IntroDiv,
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
        <IntroDiv>
          <IntroTitle ref={(el) => (IntroText = el)}>
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '0.6px #FDFDFD',
              }}
            >
              STAND OUT <br />
            </span>
            FROM THE CROWD{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '0.6px #FDFDFD',
              }}
            >
              .
            </span>
          </IntroTitle>
        </IntroDiv>
      </IntroScreen>
      <HeroBackgroundRight>
        <HeroRightDiv>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1, ease: 'easeIn' }}
          >
            PARAGON
          </HeroTitle>
          <HeroLine
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1.1, ease: 'easeIn' }}
          />
        </HeroRightDiv>
      </HeroBackgroundRight>
      <HeroBackgroundLeft />
    </HeroDiv>
  );
};
