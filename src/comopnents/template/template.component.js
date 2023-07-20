import { NavLink, Outlet } from 'react-router-dom';

import {
    MainPage,
    HeaderPage,
    DivLogo,
    ImageLogo,
    Menu,
    ElementMenu,
    InfoDifer,
    FlexNavLink
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
                        <ElementMenu>Staffs</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Products</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Invoice</ElementMenu>
                    </FlexNavLink>
                    <FlexNavLink>
                        <ElementMenu>Warehouse</ElementMenu>
                    </FlexNavLink>
                </Menu>
                <InfoDifer>
                    <div>User</div>
                </InfoDifer>
            </HeaderPage>
        </MainPage>
    )
}

export default Template;