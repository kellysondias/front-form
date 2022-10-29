import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  text-decoration: none;
}

html {
  font-size: 62.5%;
  background-color: theme.background;
  color: theme.color; 
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161515ee;
  font-family: 'Montserrat', sans-serif;
}
ol, ul {
  list-style: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button,
input[type=number] {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}
`;
