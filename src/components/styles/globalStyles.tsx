import { createGlobalStyle } from 'styled-components';
import { fontSizes } from './styleVariables';

export const GlobalStyles = createGlobalStyle`
  html{
    font-size:16px;
  }

body{
      -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}

*{
  line-height:1.3;
}

h1, h2, h3{
  font-size: ${fontSizes.medium};
} 
   #root{
    height:100%;
   }
`;
