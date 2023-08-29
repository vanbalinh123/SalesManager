import { styled, css } from "styled-components";

export const DivPayroll = styled.div`
    width: 50%;
    height: 40%;
    background-color: #ffffff;
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 20px 1px grey;
    color: #696969;
    display: flex;
    flex-direction: column;
`;

export const Span = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    padding-left: 3%;
`;

export const Div = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
`;

export const DivHeader = styled.div`
    flex: 1.5;
    display: flex;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    font-weight: bold;
`;

export const DivBody = styled.div`
    flex: 1;
    display: flex;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
`;

export const SpanHeader = styled.span`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpanBody = styled.span`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-left: 1px solid #ccc;
`;

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    border: none;
`;

export const DivBtns = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-left: 5%;
    margin-right: 5%;
`;

export const DivBtn = styled.div`
    width: 100px;
    height: 50px;
`;

export const Btn = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 2px 6px;
    transition: all 0.3s;
    color: #696969;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        box-shadow: grey 0px 1px 1px;
    }
`;