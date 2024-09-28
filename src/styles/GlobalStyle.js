import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    html, body, div, span, applet, object, iframe,
     p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    *{
        box-sizing: border-box;
    }
    body {
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.primaryText};
        position:relative;
        min-width: 540px;
        min-height: 100vh;
        text-align: center;
        white-space: pre-line;
    }
    menu, ol, ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button,
    input{
        margin: 4px;
        padding: 4px;
        border: black solid 1px;
        border-radius: 5px;
    }

    hr{
        margin: 12px;
    }

    a{
        text-decoration: none;
    }
    s
`;