import {Page1} from "./components/page/page1/page1";
import Header from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import styled from "styled-components";

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Main = styled.main`
    flex: 1;
`;

function App() {
    return (
        <BodyWrapper>
            <Header/>
            <Main>
                <Page1/>
            </Main>
            <Footer/>
        </BodyWrapper>
    );
}

export default App;
