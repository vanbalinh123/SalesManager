import { styled, css } from "styled-components";

//main
export const MainPage = styled.section`
    width: 100%;
    display: flex;
`;


//sidebar
export const SideBarPage = styled.nav`
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

export const Active = styled.div`
    padding: 19px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #696969;
`;

export const Time = styled.div`
    padding: 19px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #696969;
`;

export const UlActive = styled.ul`
    color: grey;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
`;

export const UlTime = styled.ul`
    color: grey;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
`;

export const ItemActive = styled.li`
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

export const ItemTime = styled.li`
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
export const ContentPage = styled.div`
    width: 70%;
`;

export const Table = styled.table`
    width: 95%;
    border-collapse: collapse;
    table-layout: fixed;
    box-shadow: grey 0px 3px 8px;
`;

export const Tr = styled.tr`
    transition: all 0.3s;
    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`;

export const THeader = styled.thead`
    
`;

export const Th = styled.th`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    background-color: #f2f2f2;
    padding: 20px 0px;
`;


export const TBody = styled.tbody`
    
`;

export const Td = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    color: grey;
    text-align: center;
`;

export const TdUpdate = styled.td`
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

export const TdDelete = styled.td`
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

export const Img = styled.img`
    width: 50px;
`;