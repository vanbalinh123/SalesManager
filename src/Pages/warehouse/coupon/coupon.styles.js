import { styled, css } from "styled-components";

export const LayoutAdd = styled.div`
    width: 70%;
    height: 80%;
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
`;

export const LeftLayoutAdd = styled.div`
    flex: 5;
    border-right: 2px solid #f2f2f2;
    display: flex;
    flex-direction: column;
`;

export const NameLayOut = styled.div`
    padding-top: 15px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
`;

export const SearchLayout = styled.div`
    height: 80px; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
`;

export const SpanName = styled.span`
    
`;

export const Input = styled.input`
    padding: 10px;
    width: 60%;
    border: none;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    box-shadow: grey 0px 2px 6px;
`;

export const BtnSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px 15px;
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

export const Span = styled.span`
    font-size: 15px;
`;

export const ResultSearch = styled.div`
    position: absolute;
    top: 70px;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: #F5F5F5;
    z-index: 11;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 1px grey;
    height: 500px;
    overflow-y: scroll;
`;

export const ChildResult = styled.div`
    display: flex;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    gap: 10px;
    background-color: #ffffff;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        background-color: #A9A9A9;
    }
`;

export const DivImg = styled.div`
    width: 60px;
    height: 50px;
`;

export const Img = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: contain;
`;

export const NameResult = styled.span`
    
`;


export const InforToAddLayout = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 20px;
    overflow-y: scroll;
`;

export const Table = styled.table`
    width: 95%;
    border-collapse: collapse;
    table-layout: fixed;
    box-shadow: grey 0px 3px 8px;
    padding-bottom: 20px;
`;

export const TdQuantity = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    color: grey;
    text-align: center;
    position: relative;
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

export const InputQuantity = styled.input`
    position: absolute;
    top: 0; 
    right: 0;
    left: 0;
    bottom: 0;
    border: none;
    text-align: center;
    color: grey;
`;

//right layout
export const RightLayoutAdd = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
`;

export const DivInfo = styled.div`
    display: flex;
    flex: 0.7;
    flex-direction: column;
`;

export const DivInfoChild = styled.div`
    display: flex;
    padding: 0px 10px;
    flex: 1;
    align-items: center;
`;

export const DivInfoLeftChild = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const DivInfoRightChild = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

export const SpanInfoChild = styled.span`
    
`;

export const SpanInfoCode = styled.span`
    &::after {
    content: "*";
    color: red;
    padding-left: 10px;
  }
`;

export const DivNotes = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    gap: 10px;
`;

export const SpanNotes = styled.span`
    padding: 10px 0px;
    &::after {
    content: "*";
    color: red;
    padding-left: 10px;
  }
`;

export const InputNotes = styled.textarea`
    height: 100%;
    padding: 10px;
    border: none;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
`;


export const InputCode = styled.input`
    /* height: 100%; */
    
    padding: 10px;
    border: none;
    border: 2px solid #F5F5F5;
    border-radius: 5px;

    
`;

export const DivNote = styled.div`
    height: 100%;
    padding: 10px;
    border: none;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
`;

export const DivButtons = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const DivButton = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #F5F5F5;
    box-shadow: grey 0px 3px 8px;
    transition: all 0.3s;
    
    &:hover{
        cursor: pointer;
        box-shadow: grey 0px 1px 1px;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    color: #696969;
    &:hover {
        cursor: pointer;
    }
`;