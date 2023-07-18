import { styled } from "styled-components";

export const FormLogin = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #ffffff;
    font-size: 16px;
`;

export const ImageLogin = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;  
`;

export const Form = styled.form`
    position: absolute;
    top: 50%;
    border: 1px solid #ffffff;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 60%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 25px 1px #DCDCDC;
    border-radius: 5px;
`;

export const Svg = styled.svg`
    position: absolute;
    width: 20px;
    color: #000000;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 15px;
    z-index: 10;
`;

export const TextLogin = styled.h1`
    color: #fffffff;
    padding-top: 20px;
    font-size: 50px;
    text-transform: uppercase;
`;

export const Operation = styled.div`
    height: 100%;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const ImportDataUser = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

export const ButtonLoginOrRegister = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px
`;

export const ElementInput = styled.div`
    height: 100%;
    witdh: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 20%;
    padding-top: 2%;
`;

export const Label = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    padding-left: 30px;
    border-radius: 5px;
    border: none;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const InputAndErrors = styled.div`
    width: 100%;
    position: relative;
    flex: 4;
`;

export const ButtonLogin = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    color: #ffffff;
    background-image: linear-gradient(to bottom left, #ffffff, #696969);
    opacity: 1;
    
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        border: 1px solid #ffffff;
        font-size: 19px;
        box-shadow: 0px 0px 10px 1px #ffffff;
    }
`;

export const AskRegister = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    a {
        text-decoration: none;
        color: aquamarine;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const PAsk = styled.p`
    color: #ffffff;
`;

export const MessageErorrs = styled.div`
    padding-left: 15px;
    color: red;
    font-style: italic;
`;
