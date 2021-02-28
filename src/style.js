import styled from "styled-components";

export const Main = styled.main`
margin: 0;
padding: 0;
line-height: 1;
color: #202020;
background-color: #0d1117;
font-smooth: always;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`;

export const Header = styled.header`
margin: auto;
text-align: center;
background: url(/images/recipe.jpg) repeat-x;
height: 60px;
background-size: contain;
>  h1 {
    margin: 0;
    text-shadow: 5px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    color: white;
    line-height: 55px;
    font-size: 35px;
    text-transform: uppercase;
  }
`;

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 1rem;
max-width: 1200px;
margin: auto;
`;
