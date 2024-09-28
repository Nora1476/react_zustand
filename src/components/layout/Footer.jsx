import styled from "styled-components";
import BtnBasic from "../button/BtnBasic";
import {useThemeStore} from "../../store/useThemeStore";

const Wrapper = styled.div`
    margin-top: 50px;
    
`;


export const  Footer = ()=>{
    const { themeMode, setToggleTheme } = useThemeStore();


    return (
        <Wrapper>
            <hr/>
            <h3 className="font-semibold text-sm p-12">footer</h3>

            <div className="text-right p-2 pb-4">
                <BtnBasic onClick={setToggleTheme}>{themeMode ? "☀" : "☾"}</BtnBasic>
            </div>
        </Wrapper>
    )
}

