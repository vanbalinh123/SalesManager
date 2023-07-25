import { styled } from "styled-components";

//header
export const HeaderProductsPage = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
`;

export const NameOutlet = styled.span`
    width: 20%;
    font-size: 25px;
    font-weight: bold;
`;

export const LayoutSearch = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ValueToSearch = styled.span`

`;

export const InputSearch = styled.input`
    padding: 10px;
    width: 250px;
    border: none;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    box-shadow: grey 0px 2px 6px;

`;

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #F5F5F5;
    gap: 5px;

    box-shadow: grey 0px 3px 8px;
    transition: all 0.3s;
    color: #696969;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        box-shadow: grey 0px 1px 1px;
    }
`;

export const Svg = styled.svg`
    width: 20px;
`;

export const SpanSearch = styled.span`
    font-size: 15px;
`

export const DivAddProduct = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
`;


export const ButtonAddProduct = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0px 15px;
    border-radius: 5px;
    height: 47px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 3px 8px;
    transition: all 0.3s;
    color: #696969;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        box-shadow: grey 0px 1px 1px;
    }
`;

export const SpanAddProduct = styled.span`
    font-size: 15px;
`