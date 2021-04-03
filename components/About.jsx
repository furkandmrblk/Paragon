import React from 'react';
import {
  AboutContainer,
  AboutLandingPage,
  AboutSocials,
  AboutSocialsDiv,
  AboutSubtitle,
  AboutText,
} from './AboutS';

export const About = () => {
  return (
    <AboutContainer>
      <AboutLandingPage>
        <AboutText>Hello.</AboutText>
        <AboutText>We are Paragon, an independent design</AboutText>
        <AboutText style={{ marginBottom: '5rem' }}>
          studio based in Mexico City.
        </AboutText>
      </AboutLandingPage>
      <AboutSubtitle>Services</AboutSubtitle>
      <AboutText> Visual identity</AboutText>
      <AboutText> Packaging</AboutText>
      <AboutText> Books & Magazines</AboutText>
      <AboutText> Printed Material</AboutText>
      <AboutText> Creative Writing</AboutText>
      <AboutText> UI Design</AboutText>
      <AboutText> UX Design</AboutText>
      <AboutText> UI Design</AboutText>
      <AboutText> Posters</AboutText>
      <AboutText> Typography</AboutText>
      <AboutText> Naming</AboutText>
      <AboutSubtitle>Famous Clients</AboutSubtitle>
      <AboutText> WWF</AboutText>
      <AboutText> Oxxo</AboutText>
      <AboutText> Inmedic</AboutText>
      <AboutText> Varega</AboutText>
      <AboutSubtitle>Social</AboutSubtitle>
      <AboutSocialsDiv>
        <AboutSocials>Dribbble </AboutSocials>
        <AboutText> - </AboutText>
        <AboutSocials> Behance</AboutSocials>
      </AboutSocialsDiv>
    </AboutContainer>
  );
};
