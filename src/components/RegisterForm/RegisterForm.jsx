import { Container, Form, Input, Button } from "components/RegisterForm/RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }   
    return (
        <Container onSubmit={handleSubmit}>
            <Form>
                <Input
                    name="name"
                    value={name}
                    placeholder="Enter login"
                    required
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    name='email'
                    value={email}
                    placeholder="Enter email"
                    required
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name='password'
                    value={password}
                    placeholder="Enter password" 
                    required
                    onChange={handleChange}
                />
                <Button>Register</Button>   
            </Form>   
        </Container>
    );
};