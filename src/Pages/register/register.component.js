import './register.styles';
import { NavLink } from 'react-router-dom';

import '../basic.styles.css';
import { FormRegister } from './register.styles';
import { ImageRegister } from './register.styles';
import { Form } from './register.styles';
import { TextRegister } from './register.styles';
import { Operation } from './register.styles';
import { RegisterDataUser } from './register.styles';
import { ButtonRegisterOrLogin } from './register.styles';
import { ElementInput } from './register.styles';
import { Label } from './register.styles';
import { Input } from './register.styles';
import { ButtonRegister } from './register.styles';
import { AskLogin } from './register.styles';
import { PAsk } from './register.styles';
import { Svg } from './register.styles';

const Register = () => {

    return (
        <FormRegister>
            <ImageRegister src='https://img.freepik.com/premium-photo/top-view-gaming-gear_160097-825.jpg?w=2000' alt='background-register' />
            <Form>
                <TextRegister>Register</TextRegister>
                <Operation>
                    <RegisterDataUser>
                        <ElementInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </Svg>
                            <Label>User Name</Label>
                            <Input type='text' placeholder='Username...' />
                        </ElementInput>
                        <ElementInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </Svg>
                            <Label>Email</Label>
                            <Input type='text' placeholder='Email...' />
                        </ElementInput>
                        <ElementInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </Svg>
                            <Label>Password</Label>
                            <Input type='text' placeholder='Password...' />
                        </ElementInput>
                        <ElementInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </Svg>
                            <Label>Confilm password</Label>
                            <Input type='text' placeholder='Confirm Password...' />
                        </ElementInput>
                    </RegisterDataUser>
                    <ButtonRegisterOrLogin>
                        <ButtonRegister>Register</ButtonRegister>
                        <AskLogin>
                            <PAsk>You have account?</PAsk>
                            <NavLink to='/'>Login</NavLink>
                        </AskLogin>
                    </ButtonRegisterOrLogin>
                </Operation>
            </Form>
        </FormRegister>
    )
}

export default Register;