import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
 

}
html, body{
    overflow-x: hidden;
    /* font-family: "Lato", sans-serif; */
  color: #333;
  line-height: 1.2;
  background: rgb(207, 132, 58, 0.1);
}
a {
    color: #fff;
    text-decoration: none;
}
h1, p{
    padding: 0.5rem 0;
    line-height: 1.6;
  
}
ul{
    list-style: none;
}
`;
export default GlobalStyle;
