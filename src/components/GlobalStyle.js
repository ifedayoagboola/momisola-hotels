import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 

}
html, body{
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Montserrat', sans-serif; */
}
a {
    color: #fff;
    text-decoration: none;
}
h1, p{
    padding:0.5rem 0;
}
`;
export default GlobalStyle;
