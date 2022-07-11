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
    max-height: 2000px;
    height: 2000px;

}

*,button, input{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Ubuntu', 'Helvetica Neue',
    sans-serif;
    border:0;
    background: none;
}

html{
    background-color: var(--darker);
}


:root{
    --darker: #0b090aff;
    --secondary: #161a1dff;
    --blood-red: #660708ff;
    --ruby-red: #a4161aff;
    --carnelian: #ba181bff;
    --imperial-red: #e5383bff;
    --black-shadows: #b1a7a6ff;
    --light-gray: #d3d3d3ff;
    --cultured: #f5f3f4ff;
    --white: #ffffffff;
}

`;
