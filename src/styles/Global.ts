import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    body {
        background-color: #F8F8F8;
    }

    html{
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
`;

export default Global;
