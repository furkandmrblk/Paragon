import { createGlobalStyle } from 'styled-components';
import * as color from './GlobalColors';
import { media } from '../theme/MediaQueries';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    background-color: ${color.$white};
    color: ${color.$black};
    overflow-x: hidden;
    
    @media (min-width: ${media.laptopS}) {
      cursor: none;
    }

    h1,h2,h3,h4,h5,h6, p {
      margin: 0;
    }
    a, a:visited, a:hover {
    text-decoration: none;

    @media (min-width: ${media.laptopS}) {
      cursor: none;
    }
    @media (max-width: ${media.laptopS}) {
      cursor: pointer;
    }
    } 

    @media (min-width: ${media.laptopS}) {
      input, button, textarea {
        cursor: none;
      }
    }
    
  }
`;

export default GlobalStyle;
