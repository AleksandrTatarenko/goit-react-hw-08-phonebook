import { Container, Form, Input, Button } from "components/LoginForm/LoginForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,   
                password: form.elements.password.value,
            })  
        );
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    required 
                />
                <Input
                    type="password"
                    name='password'
                    placeholder="Enter password" 
                    required
                />
                <Button>Log in</Button>   
            </Form>   
        </Container>
    );
};