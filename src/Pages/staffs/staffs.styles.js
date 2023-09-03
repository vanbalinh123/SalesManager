import { styled, css } from "styled-components";

export const ContentPage = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const Table = styled.table`
    width: 90%;
    margin: 0 auto;
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

export const TdPayroll = styled.td`
    border: 1px solid #ccc;
    text-align: center;

    svg {
        tranform: scale(1);
        color: grey;
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
    height: 50px;
    object-fit: cover;
`;



