import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  
  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-family: 'Futura';
    font-size: 1.6rem;
  }
  
  a{
    text-decoration: none !important;
  }
  
  h1{
    margin: 0;
  }
`;

export default GlobalStyle;
