import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Router} from "./router/Router";
import { ThemeProvider } from "styled-components";
import {useThemeStore} from "./store/useThemeStore";
import {darkMode, lightMode} from "./theme/theme";
import {GlobalStyle} from "./styles/GlobalStyle";


const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {
const { themeMode } = useThemeStore();
    return(
    <>
        <ThemeProvider theme={themeMode ? darkMode : lightMode}>
            <GlobalStyle/>
            <RouterProvider router={Router}/>
            {/*<App />*/}
        </ThemeProvider>
    </>
    )
}

root.render(<Root/>)

