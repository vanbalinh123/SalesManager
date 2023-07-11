import './login.styles.js';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import '../basic.styles.css'
import { FormLogin } from './login.styles.js';
import { ImageLogin } from './login.styles.js';
import { Form } from './login.styles.js';
import { Svg } from './login.styles.js';
import { TextLogin } from './login.styles.js';
import { Operation } from './login.styles.js';
import { ImportDataUser } from './login.styles.js';
import { ButtonLoginOrRegister } from './login.styles.js';
import { ElementInput } from './login.styles.js';
import { Input } from './login.styles.js';
import { Label } from './login.styles.js';
import { ButtonLogin } from './login.styles.js';
import { AskRegister } from './login.styles.js';
import { PAsk } from './login.styles.js';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
    };


    return (
        <FormLogin>
            <ImageLogin src="https://img.freepik.com/premium-photo/top-view-gaming-gear_160097-822.jpg?w=2000" alt='background-Login' />
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextLogin>Login</TextLogin>
                <Operation>
                    <ImportDataUser>
                        <ElementInput>
                            <Label>Email</Label>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </Svg>
                            <Input type='text' placeholder='Email...'/>
                        </ElementInput>
                        <ElementInput>
                            <Label>Password</Label>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </Svg>
                            <Input type='password' placeholder='Password...' />
                        </ElementInput>
                    </ImportDataUser>
                    <ButtonLoginOrRegister>
                        <ButtonLogin>Login</ButtonLogin>
                        <AskRegister>
                            <PAsk>You don't have an account?</PAsk>
                            <NavLink to='/register'>Register</NavLink>
                        </AskRegister>
                    </ButtonLoginOrRegister>
                </Operation>
            </Form>
        </FormLogin>
    )
}

export default Login;

