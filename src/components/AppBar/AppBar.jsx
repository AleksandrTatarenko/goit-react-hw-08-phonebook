import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, Container } from 'components/AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  
    return (
        <Header>
            <Container> 
                <Navigation /> 
                {isLoggedIn ? <UserMenu /> : <AuthNav />} 
            </Container>  
        </Header>  
    );
};