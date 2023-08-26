import { NavLink, Outlet } from 'react-router-dom';

import { useUserLoginQuery } from '../../redux/api/login-api.slice';

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
    const { data: userLogin } = useUserLoginQuery();

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
                        to='/template/warehouse'
                    >
                        <ElementMenu>Warehouse</ElementMenu>
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
                </Menu>
                <InfoDifer>
                    <DivImageNameUser>
                        <DivImgUser>                            
                            {userLogin?.avatar? (
                                <ImageUser
                                    src={userLogin.avatar || "https://cdn5.vectorstock.com/i/1000x1000/54/69/male-user-icon-vector-8865469.jpg"}
                                    alt='img user'
                                />
                            ) : (
                                <ImageUser
                                    src="https://cdn5.vectorstock.com/i/1000x1000/54/69/male-user-icon-vector-8865469.jpg"
                                    alt='img user'
                                />
                            )}
                        </DivImgUser>
                        <UserName>{userLogin?.username}</UserName>
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