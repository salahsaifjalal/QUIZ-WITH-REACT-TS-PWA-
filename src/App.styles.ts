import styled, { createGlobalStyle } from 'styled-components';

import frontImage from './images/front.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${frontImage});
    background-size: cover;
    margin: 0;
    padding: 0 10px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Gravitas One', cursive;
    }
`;

export const Wrapper = styled.div`
  
display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: blue;
  }

   h2 {
    color:white;
    
  }

  h3 {
    color:black;
    font-family: 'Lobster', cursive;
  }

  h1 {
    font-family: 'Lobster', cursive;
    
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color:purple;
  }

  .start, .next {
    cursor: pointer;
  
    color:red;
 
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 10px;
  }

  .start {
    max-width: 400px;
  }
`;
