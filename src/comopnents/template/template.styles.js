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
    height: 70px;
    z-index: 2;
    border: 1px solid red;
    padding: 0 50px;
`;

export const DivLogo = styled.div`
    width: 300px;
    height: 100%;
    border: 1px solid blue;
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
    height: 70px;
    width: 100%;
    padding: 0 100px;
    border: 1px solid grey;
    justify-content: center;

    &li: {
        backgroundcolor: red;
    }
`
export const FlexNavLink = styled(NavLink)`
    flex: 1; 
    height: 100%;
`;

export const ElementMenu = styled.li`
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const InfoDifer = styled.div`
    width: 300px;
    height: 70px;
    border: 1px solid green;
`