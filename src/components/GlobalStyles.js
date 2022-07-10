import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}
html{
    &::-webkit-scrollbar{
width:0.5rem
    }
    &::-webkit-scrollbar-thumb{
        background-color:green;
    }
}
body{
    font-family: 'Big Shoulders Display', cursive;
}

h2{
    font-family: 'Montserrat', sans-serif;
    font-size:2rem;
}
h3{
    padding:1rem 0rem;
    color:black;
   
}
p{
    padding-bottom:1rem;
    color:black;
  
}
a{
    text-decoration:none;
}

`;

export default GlobalStyles;
