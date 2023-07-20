import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const MainPage = styled.div`
    position: fixed;
    width: 100%;
    heigh: 100%;
    z-index: 1;
`;

export const HeaderPage = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 60px;
    z-index: 2;
    padding: 0 50px;
    background-color: #F5F5F5;
`;

export const DivLogo = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ImageLogo = styled.img`
    width: 200px;
    height: 100%;
    object-fit: cover;
`


export const Menu = styled.ul`
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 100px;
    justify-content: center;
`
export const FlexNavLink = styled(NavLink)`
    flex: 1; 
    height: 100%;
    color: grey;
`;

export const ElementMenu = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-left: 2px solid #ffffff;

`
export const InfoDifer = styled.div`
    width: 300px;
    height: 60px;
    border: 1px solid red;
    
`

export const DivImageNameUser = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const DivImgUser = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 90px;

`;

export const ImageUser = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 90px;
    object-fit: cover;
     
`;

export const UserName = styled.span`

`;
