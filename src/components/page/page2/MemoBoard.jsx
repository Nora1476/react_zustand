import styled from "styled-components";

const MemoBoard = (props) => {
  return (
    <MemoWrapper>
      {props.children}
      <LOL>떠든사람 : </LOL>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 240px;
  height: 450px;
  overflow-y: scroll;
    -ms-overflow-style: none;  /*IE, Edge*/
    scrollbar-width: none; /*Firefox*/
    ::-webkit-scrollbar {
        display: none; /*Chrome, Safari, Opera*/
        width: 0;
    }
    flex-wrap: wrap;
  border: 14px solid #875a36;
  background-color: #81b771;
  > span:first-child {
    color: #fff;
    padding: 4px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;
const LOL = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  bottom: 50px;
  right: 16px;
  transform: rotate(-8deg);
`;
export default MemoBoard;
