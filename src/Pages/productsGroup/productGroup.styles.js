import { styled } from "styled-components";

export const MainLayoutAddGroup = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
`;

//left
export const LayoutProductGroups = styled.div`
    flex: 1;
    border: 1px solid blue;
`

export const ProductGroups = styled.div`
    width: 70%;
    margin: 0 auto;
    background-color: #F5F5F5;
    border-radius: 7px;
    box-shadow: grey 0px 3px 8px;
`;

export const NameProductsGroup = styled.div`
    padding: 19px;
    font-size: 20px;
    font-weight: bold;
    color: #696969;
`;

export const UlProductsGroup = styled.div`
    color: grey;
`;

export const ItemProduct= styled.div`
    padding: 15px;
    padding-left: 40px;
    border-top: 2px solid #ffffff;
`;


//right
export const LayoutAddProductGroup = styled.div`
    border: 1px solid green;
    flex: 1;
`;

export const FormAddNewProductGroups = styled.form`
    border: 1px solid red;
    width: 90%;
    margin: 0 auto;
`;
