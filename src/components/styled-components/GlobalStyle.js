import { createGlobalStyle } from 'styled-components'
// import WebFont from 'webfontloader';

// WebFont.load({
//   google: {
//     families: ['Open Sans Condensed','Droid Sans', 'Droid Serif']
//   }
// });


export const GlobalStyle = createGlobalStyle`

html , body {
    margin: 0;
    background-color: whitesmoke;
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
}

a {
    text-decoration:none;
    color:black;
}


`
