import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Page2} from "../components/page/page2/page2";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[]
    },
    {
        path:'/page2',
        element:<Page2/>,
        children:[]
    }
    ])