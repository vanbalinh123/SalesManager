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
    ContentSection
} from './template.styles'

const Template = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        if (accessToken === "" || accessToken === null) {
          navigate('/login');
        }
      }, []);
    

    return (
        <MainPage>
            <HeaderPage>
                <DivLogo>
                    <NavLink to='/'>
                        <ImageLogo
                            src='https://cdn3.vectorstock.com/i/1000x1000/57/62/sales-manager-rubber-stamp-vector-15605762.jpg'
                            alt='logo'
                        />
                    </NavLink>
                </DivLogo>
                <Menu>
                    <FlexNavLink>
                        <ElementMenu>Dashboard</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink
                        to='/products'
                    >
                        <ElementMenu>Products</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Product groups</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Staffs</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Invoice</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
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