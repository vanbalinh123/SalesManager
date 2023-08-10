import { styled } from "styled-components";

//add
export const LayoutAddProductGroup = styled.div`
    flex: 1;
    padding: 20px;
`;

export const FormAddNewProductGroups = styled.form`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const InputAddProductGroup = styled.input`
    width: 350px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    box-shadow: grey 0px 2px 6px;
`;


//show
export const MainLayoutAddGroup = styled.div`
    width: 100%;
    padding: 40px 0px;
`;

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

export const UlProductsGroup = styled.ul`
    color: grey;
`;

export const SvgDelete = styled.svg`
    width: 20px;
    color: red;
    position: absolute;
    right: 60px;
    tranform: scale(1);
    transition: all 0.3s;

    &:hover {
        transform: scale(1.3);
    }
`;

export const SvgUpdate = styled.svg`
    width: 20px;
    color: blue;
    position: absolute;
    right: 110px;
    tranform: scale(1);
    transition: all 0.3s;

    &:hover {
        transform: scale(1.3);
    }
`;

export const ItemProduct = styled.li`
    padding: 15px;
    padding-left: 60px;
    border-top: 2px solid #ffffff;
    display: flex;
    position: relative;

    &:hover {
        cursor: pointer;
    };
`;

export const QuantityItem = styled.div`
    position: absolute;
    right: 220px;
`

export const NameItemProduct = styled.li`
    padding: 15px;
    padding-left: 40px;
    border-top: 2px solid #ffffff;
    display: flex;
    position: relative;
`;

export const QuantityItemProduct = styled.div`
    position: absolute;
    right: 200px;
`


