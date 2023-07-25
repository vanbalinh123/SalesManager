import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import {
    MainPage,
    HeaderPage,
    DivLogo,
    ImageLogo,
    Menu,
    ElementMenu,
    InfoDifer,
    FlexNavLink,
    DivImageNameUser,
    ImageUser,
    UserName,
    DivImgUser,
    ContentSection,
} from './template.styles'

const Template = () => {
    return (
        <MainPage>
            <HeaderPage>
                <DivLogo>
                    <NavLink to='/template/dashboard'>
                        <ImageLogo
                            src='https://cdn3.vectorstock.com/i/1000x1000/57/62/sales-manager-rubber-stamp-vector-15605762.jpg'
                            alt='logo'
                        />
                    </NavLink>
                </DivLogo>
                <Menu>
                    <FlexNavLink
                        to='/template/dashboard'
                    >
                        <ElementMenu>Dashboard</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/template/products'
                    >
                        <ElementMenu>Products</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/template/productsGroup'
                    >
                        <ElementMenu>Product groups</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/template/staffs'
                    >
                        <ElementMenu>Staffs</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/template/invoice'
                    >
                        <ElementMenu>Invoice</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/template/warehouse'
                    >
                        <ElementMenu>Warehouse</ElementMenu>
                    </FlexNavLink>
                </Menu>
                <InfoDifer>
                    <DivImageNameUser>
                        <DivImgUser>
                            <ImageUser
                                src="https://cdn5.vectorstock.com/i/1000x1000/54/69/male-user-icon-vector-8865469.jpg"
                                alt='img user'
                            />
                        </DivImgUser>
                        <UserName>Nguyen Van A</UserName>
                    </DivImageNameUser>
                </InfoDifer>
            </HeaderPage>
            <ContentSection>
                <Outlet />
            </ContentSection>
        </MainPage>
    )
}

export default Template;