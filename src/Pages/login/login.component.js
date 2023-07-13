import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useGetUsersQuery } from '../../redux/api/api.slice';
import { useUserActivedMutation } from '../../redux/api/api.slice';

import '../basic.styles.css'
import { 
    FormLogin,
    ImageLogin,
    Form,
    Svg,
    TextLogin,
    Operation,
    ImportDataUser,
    ButtonLoginOrRegister,
    ElementInput,
    Input,
    Label,
    ButtonLogin,
    AskRegister,
    PAsk,
    InputAndErrors,
    MessageErorrs
} from './login.styles.js';


const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {
        data: users = []
    } = useGetUsersQuery();

    const [ userActived ] = useUserActivedMutation();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        let findUser = users.find(item => item.email === email);

        if(findUser === undefined) {
            alert('Email not registered!')
        } else {
            if(findUser.password === password) {
                await userActived(findUser)
                alert('Logged in successfully!')
            } else {
                alert('Incorrect password!')
            }
        }
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
                            <Label>
                                Email
                                {errors.email && <MessageErorrs>{errors.email.message}</MessageErorrs>}    
                            </Label>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </Svg>
                            <InputAndErrors>
                                <Input
                                    //{...register("email")}
                                    {...register("email", {
                                        required: "Email is required", // Quy tắc: bắt buộc nhập
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Please enter a valid email address" // Quy tắc: định dạng email
                                        }
                                    })}
                                    type='text'
                                    placeholder='Email...'
                                />
                            </InputAndErrors>
                        </ElementInput>
                        <ElementInput>
                            <Label>
                                Password
                                {errors.password && <MessageErorrs>{errors.password.message}</MessageErorrs>}    
                            </Label>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </Svg>
                            <InputAndErrors>
                                <Input 
                                    {...register("password",{
                                        required: "Password is required"
                                    })} 
                                    type='password' 
                                    placeholder='Password...' 
                                />
                            </InputAndErrors>
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

