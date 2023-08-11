import { styled } from "styled-components";

export const Paginate = styled.div`
    width: 95%;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
    
`

export const ButtonNextPrevious = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px; 
    height: 45px;
    background-color: #F5F5F5; 
    color: grey;
    border: 1px solid #A9A9A9;
    transition: all 0.3s;
    &:hover {
        color: #ffffff;
        background-color: #A9A9A9;
        cursor: pointer;
     }
`

export const DivMountPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px; 
    height: 45px;
    background-color: #F5F5F5; 
    color: grey;
    border: 1px solid #A9A9A9;
    transition: all 0.3s;
    &:hover {
        color: #ffffff;
        background-color: #A9A9A9;
        cursor: pointer;
    }
    &.active-mount-page {
        color: #ffffff;
        background-color: #A9A9A9;
    }
`