import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    color: var(--cultured);
  
}

a,li{
    text-decoration:none;
    list-style: none;
}

html,body, #root{
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;

}

/* width */
::-webkit-scrollbar {
  width: 1rem;
  height: 100px;
}

.movie{
  display:grid;
  grid-template-columns: repeat(3,2fr);
  width: 100%;
  gap: 4px;
  justify-content:center;
  align-items:center;
  @media (max-width: 1200px){

grid-template-columns: repeat(2,1fr);
}
  @media (max-width: 800px){

    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 650px){

grid-template-columns: repeat(1,1fr);
}
}
/* Track */
::-webkit-scrollbar-track {
  background: rgba(255,255,255)
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

*,button, input{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Ubuntu', 'Helvetica Neue',
    sans-serif;
    border:0;
    background: none;
}

html{
  background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(7,67,139,1) 62%, rgba(7,75,141,1) 78%, rgba(5,132,158,1) 100%);
}


:root{
    --darker: #0b090aff;
    --secondary: #161a1dff;
    --carnelian: #ba181bff;
    --black-shadows: #b1a7a6ff;
    --light-gray: #d3d3d3ff;
    --cultured: #f5f3f4ff;
    --white: #ffffffff;
}

`;
