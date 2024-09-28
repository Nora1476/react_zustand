import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import { rgba } from 'polished'

const Nav = styled.nav`
    ul{
        
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 20px 0 20px 0;
    background: ${({theme}) => rgba(theme.blue2, 0.5)};
    }
    margin-bottom: 20px;
`
const NavStyle = styled(NavLink)`
    font-size: 16px;
    font-weight: 400;
    outline: invert;

    &:link {
        transition: 0.5s;
        text-decoration: none;
    }
    &:hover {
    }
    &.active {
        font-weight: bold;
        top: 2px;
    }
`


function Header() {
    return (
        <>

            <Nav>
                <h3 className={"font-bold text-3xl p-4"}>
                    <Link to={"/"}> Zustand </Link>
                </h3>
                <ul>
                    <li><NavStyle to={'/'}>Home</NavStyle></li>
                    <li><NavStyle to={'/page2'}>Page2</NavStyle></li>
                </ul>
            </Nav>
        </>
    )
}

export default Header;
