import { NavLink, Outlet } from 'react-router-dom';

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
    DivImgUser
} from './template.styles'

const Template = () => {

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
                    <FlexNavLink>
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3dOv-STCChtjq6TDVhqFBmGjcMY18VkshMmBf7PB&s" 
                                alt='img user'    
                            />
                        </DivImgUser>
                        <UserName>Nguyen Van A</UserName>
                    </DivImageNameUser>
                </InfoDifer>
            </HeaderPage>
        </MainPage>
    )
}

export default Template;