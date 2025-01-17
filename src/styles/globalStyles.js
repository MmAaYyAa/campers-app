import { createGlobalStyle } from 'styled-components';
import "modern-normalize";

const GlobalStyles = createGlobalStyle`
:root {
    --main: #101828;
    --text: #475467;
    --gray: #6c717b;
    --button: #E44848;
    --button-hover: #D84343;
    --rating: #FFC531;
    --badges: #F2F4F7;
    --inputs: #F7F7F7;
    --white: #FFFFFF;
    --gray-light: #DADDE1;
    --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-Medium.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-Regular.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-SemiBold.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}



body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.005em;
    color: var(--main);
    background-color: var(--white);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
}

*, 
*::before, 
*::after {
    box-sizing:border-box;
}

input, textarea{
    font-family: inherit;

    &:focus {
    outline: none;
    }

    img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
  object-fit: cover;
}
}`;
export default GlobalStyles;