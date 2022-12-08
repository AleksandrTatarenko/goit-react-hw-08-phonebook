import { Container, Text } from 'pages/Home/Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectUser } from 'redux/auth/selectors';

export const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    return (<Container>
        {isLoggedIn ? <Text>{user.name}, wellcome to contact book!</Text>:<Text>Wellcome to contacts book! Please pass authorization.</Text>}
    </Container>)
}