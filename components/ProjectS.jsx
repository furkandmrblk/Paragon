import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Project Container
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$black};
  color: ${color.$white};

  min-height: 100vh;

  padding: 9rem 0rem;
`;

// Project Title
export const ProjectTitle = styled.div`
  font-size: ${typeface.$smfont};
  font-weight: ${typeface.$light};

  margin-bottom: 3rem;
  margin-left: 7.1875rem;

  @media (max-width: 1510px) {
    font-size: ${typeface.$mqsm1font};
  }
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqsm2font};
    margin-left: 5.1875rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqsm3font};
    margin-left: 3.1875rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqsm4font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqsm5font};
    margin-bottom: 1rem;
  }
  @media (max-width: 550px) {
    margin-left: 2.1875rem;
  }
  @media (max-width: ${media.mobileL}) {
    margin-left: 1.1875rem;
  }
`;

// Project MainImage
export const ProjectMainImage = styled.img`
  object-fit: cover;

  height: 70vh;
  width: 100vw;

  margin-bottom: 5rem;

  @media (max-width: ${media.laptopS}) {
    height: 50vh;
  }
  @media (max-width: ${media.tablet}) {
    height: 40vh;
    margin-bottom: 2rem;
  }
  @media (max-width: 550px) {
    height: 30vh;
  }
  @media (max-width: ${media.mobileL}) {
    height: 25vh;
  }
  @media (max-width: ${media.mobileS}) {
    height: 22vh;
  }
`;

// Project MainText
export const ProjectMainText = styled.h1`
  font-size: ${typeface.$text};
  font-weight: ${typeface.$thin};
  text-align: justify;
  max-width: 50rem;

  margin-left: 7.1875rem;
  margin-bottom: 25rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqtext1font};
    margin-left: 5.1875rem;
  }
  @media (max-width: ${media.laptopM}) {
    margin-left: 3.1875rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqtext2font};
    max-width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    max-width: 25rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqtext3font};
    max-width: 21rem;
    margin-left: 2.1875rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqtext4font};
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 20rem;
    margin-left: 1.1875rem;

    margin-bottom: 15rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 16.5rem;
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 14rem;
  }
`;

// BottomDiv
export const ProjectBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  @media (max-width: ${media.tablet}) {
    align-items: flex-start;

    padding-left: 3.1875rem;
  }
  @media (max-width: 550px) {
    padding-left: 2.1875rem;
  }
  @media (max-width: ${media.mobileL}) {
    padding-left: 1.1875rem;
  }
`;

export const ProjectBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 88vw;

  margin-bottom: 10rem;

  @media (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: flex-start;

    width: auto;
  }
`;

// Project Image && Decoration
export const ProjectImage = styled.img`
  z-index: 2;
  object-fit: cover;

  height: 485px;
  width: 570px;

  @media (max-width: ${media.laptopL}) {
    height: 435px;
    width: 520px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 405px;
    width: 490px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 305px;
    width: 390px;
  }
  @media (max-width: ${media.tablet}) {
    order: 1;
    margin-bottom: 2rem;
  }
  @media (max-width: 550px) {
    height: 255px;
    width: 340px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 225px;
    width: 320px;
  }
  @media (max-width: ${media.mobileM}) {
    height: 185px;
    width: 266px;
  }
  @media (max-width: ${media.mobileS}) {
    height: 145px;
    width: 226px;
  }
`;

export const ProjectImageBGRight = styled.div`
  position: absolute;
  right: 0;

  background-color: ${color.$gray};

  height: 570px;
  width: 570px;

  @media (max-width: ${media.laptopL}) {
    height: 520px;
    width: 520px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 490px;
    width: 490px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 390px;
    width: 390px;
  }
  @media (max-width: ${media.tablet}) {
    display: none;
  }
`;

export const ProjectImageBGLeft = styled.div`
  position: absolute;
  left: 0;

  background-color: ${color.$gray};

  height: 570px;
  width: 570px;

  @media (max-width: ${media.laptopL}) {
    height: 520px;
    width: 520px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 490px;
    width: 490px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 390px;
    width: 390px;
  }
  @media (max-width: ${media.tablet}) {
    display: none;
  }
`;

// Project Text
export const ProjectText = styled.h1`
  font-size: ${typeface.$text};
  font-weight: ${typeface.$thin};
  text-align: justify;
  max-width: 35rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqtext1font};
    max-width: 28rem;
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 23rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqtext2font};
    max-width: 15rem;
  }
  @media (max-width: ${media.tablet}) {
    order: 2;
    max-width: 24rem;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqtext3font};
    max-width: 21rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqtext4font};
    max-width: 20rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 16.5rem;
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 14rem;
  }
`;
