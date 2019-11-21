import {createGlobalStyle} from 'styled-components';

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
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }
  
  h1{
    margin: 0;
  }
`;

export default GlobalStyle;
