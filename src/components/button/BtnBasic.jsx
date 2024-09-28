import styled from "styled-components";

const BtnBasic = styled.button`
    padding: 8px 10px;
    border: ${({theme}) => theme.border}, 1px solid ;
    border-radius: 4px;
    background-color: ${({theme}) => theme.bgColor};
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #0056b3;
    }
    &:disabled{
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <BtnBasic
            // className={`custom-button ${className}`} // 기본 클래스에 추가 클래스 적용
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children} {/* 버튼의 텍스트 또는 컴포넌트 */}
        </BtnBasic>
    );
};

export default Button;
