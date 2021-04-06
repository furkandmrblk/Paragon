import React, { useEffect, useRef } from 'react';
import { Power3, gsap } from 'gsap';
import {
  AboutContainer,
  AboutLandingPage,
  AboutSocials,
  AboutSocialsDiv,
  AboutSubtitle,
  AboutText,
} from './AboutS';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  let Item = useRef(null);
  let Item2 = useRef(null);
  let Item3 = useRef(null);
  let Item4 = useRef(null);
  let Item5 = useRef(null);
  let Item6 = useRef(null);
  let Item7 = useRef(null);
  let Item8 = useRef(null);
  let Item9 = useRef(null);
  let Item10 = useRef(null);
  let Item11 = useRef(null);
  let Item12 = useRef(null);
  let Item13 = useRef(null);
  let Item14 = useRef(null);
  let Item15 = useRef(null);
  let Item16 = useRef(null);
  let Item17 = useRef(null);
  let Item18 = useRef(null);
  let Item19 = useRef(null);
  let Item20 = useRef(null);
  let Item21 = useRef(null);

  useEffect(() => {
    gsap.from(Item, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item3,
      },
    });
    gsap.from(Item2, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item4,
      },
    });
    gsap.from(Item3, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item5,
      },
    });
    gsap.from(Item4, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item6,
      },
    });
    gsap.from(Item5, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item7,
      },
    });
    gsap.from(Item6, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item8,
      },
    });
    gsap.from(Item7, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item9,
      },
    });
    gsap.from(Item8, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item10,
      },
    });
    gsap.from(Item9, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item11,
      },
    });
    gsap.from(Item10, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item12,
      },
    });
    gsap.from(Item11, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item13,
      },
    });
    gsap.from(Item12, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item14,
      },
    });
    gsap.from(Item13, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item15,
      },
    });
    gsap.from(Item14, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item16,
      },
    });
    gsap.from(Item15, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item17,
      },
    });
    gsap.from(Item16, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item18,
      },
    });
    gsap.from(Item17, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item19,
      },
    });
    gsap.from(Item18, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item20,
      },
    });
    gsap.from(Item19, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item20,
      },
    });
    gsap.from(Item20, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item21,
      },
    });
    gsap.from(Item21, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Item21,
      },
    });
  });

  return (
    <AboutContainer>
      <AboutLandingPage>
        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hello.
        </AboutText>
        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          We are Paragon, an independent design
        </AboutText>
        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
          style={{ marginBottom: '3.75rem' }}
        >
          studio based in Mexico City.
        </AboutText>
      </AboutLandingPage>
      <AboutSubtitle ref={(el) => (Item = el)}>Services</AboutSubtitle>
      <AboutText ref={(el) => (Item2 = el)}>Visual identity</AboutText>
      <AboutText ref={(el) => (Item3 = el)}>Packaging</AboutText>
      <AboutText ref={(el) => (Item4 = el)}>Books & Magazines</AboutText>
      <AboutText ref={(el) => (Item5 = el)}>Printed Material</AboutText>
      <AboutText ref={(el) => (Item6 = el)}>Creative Writing</AboutText>
      <AboutText ref={(el) => (Item7 = el)}>UI Design</AboutText>
      <AboutText ref={(el) => (Item8 = el)}>UX Design</AboutText>
      <AboutText ref={(el) => (Item9 = el)}>UI Design</AboutText>
      <AboutText ref={(el) => (Item10 = el)}>Posters</AboutText>
      <AboutText ref={(el) => (Item11 = el)}>Typography</AboutText>
      <AboutText ref={(el) => (Item12 = el)}>Naming</AboutText>
      <AboutSubtitle ref={(el) => (Item13 = el)}>Famous Clients</AboutSubtitle>
      <AboutText ref={(el) => (Item14 = el)}>WWF</AboutText>
      <AboutText ref={(el) => (Item15 = el)}>Oxxo</AboutText>
      <AboutText ref={(el) => (Item16 = el)}>Inmedic</AboutText>
      <AboutText ref={(el) => (Item17 = el)}>Varega</AboutText>
      <AboutSubtitle ref={(el) => (Item18 = el)}>Social</AboutSubtitle>
      <AboutSocialsDiv>
        <AboutSocials ref={(el) => (Item19 = el)}>Dribbble </AboutSocials>
        <AboutText ref={(el) => (Item20 = el)}> - </AboutText>
        <AboutSocials ref={(el) => (Item21 = el)}> Behance</AboutSocials>
      </AboutSocialsDiv>
    </AboutContainer>
  );
};
