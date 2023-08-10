import { styled, css } from "styled-components";

import ReactPaginate from "react-paginate";

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

//main
export const MainProductsPage = styled.section`
    width: 100%;
    display: flex;
`;


//sidebar
export const SideBarProductsPage = styled.nav`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const ChildOfSidebar = styled.div`
    width: 70%;
    margin: 0 auto;
    box-shadow: grey 0px 3px 8px;
`;

export const NameProductsGroup = styled.div`
    padding: 19px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #696969;
`;

export const NameTrademark = styled.div`
    padding: 19px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #696969;
`;

export const UlProductsGroup = styled.ul`
    color: grey;
    height: 250px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
`;

export const UlTrademark = styled.ul`
    color: grey;
    height: 250px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
`;

export const ItemProductGroups = styled.li`
    padding: 15px;
    padding-left: 40px;
    cursor: pointer;
    background-color: #F5F5F5; 
    transition: all 0.2s;

    &:hover {
        background-color: #A9A9A9;
        color: #ffffff;
    }

    ${({ active }) => active && css`
        background-color: #A9A9A9;
        color: #ffffff;
        border-left: 7px solid #696969;
        padding: 20px;
        padding-left: 50px;
    `}
`;

export const ItemTrademark = styled.li`
    padding: 15px;
    padding-left: 40px;
    cursor: pointer;
    background-color: #F5F5F5; 
    transition: all 0.2s;

    &:hover {
        background-color: #A9A9A9;
        color: #ffffff;
    }

    ${({ active }) => active && css`
        background-color: #A9A9A9;
        color: #ffffff;
        border-left: 7px solid #696969;
        padding: 20px;
        padding-left: 50px;
    `}
`;


//content
export const ContentProductsPage = styled.div`
    width: 70%;
`;

export const TableProducts = styled.table`
    width: 95%;
    border-collapse: collapse;
    table-layout: fixed;
    box-shadow: grey 0px 3px 8px;
`;

export const TrProducts = styled.tr`
    transition: all 0.3s;
    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`;

export const THeaderProducts = styled.thead`
    
`;

export const ThProducts = styled.th`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    background-color: #f2f2f2;
    padding: 20px 0px;
`;


export const TBodyProducts = styled.tbody`
    
`;

export const TdProducts = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    color: grey;
    text-align: center;
`;

export const TdProductsUpdate = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    color: grey;
    text-align: center;

    svg {
        tranform: scale(1);
        color: dodgerblue;
        transition: all 0.3s;
    }

    &:hover{
        cursor: pointer;
        svg {
            transform: scale(1.3);         
        }
        
    }
`;

export const TdProductsDelete = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    color: grey;
    text-align: center;

    svg {
        tranform: scale(1);
        color: red;
        transition: all 0.3s;
    }
    
    &:hover{
        cursor: pointer;
        svg {
            transform: scale(1.3);
        }
        
    }
`;

export const ImgProduct = styled.img`
    width: 50px;
`;


// pagination
export const Pagination = styled(ReactPaginate)`
    border: 1px solid red;
    color: red;
    display: flex;
    width: 600px;
`

export const PageItem = styled.li`
    border: 1px solid red;
    color: red;
    width: 600px;
`

export const PageLink = styled.li`
    border: 1px solid red;
    color: red;
    width: 600px;
`