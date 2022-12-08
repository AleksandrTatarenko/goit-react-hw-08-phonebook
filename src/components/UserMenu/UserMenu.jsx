import { Container, Button, Text } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";

export const UserMenu = () => {
    const dispatch = useDispatch('');
    const user = useSelector(selectUser);

    return (
        <Container>
            <Text>Authorized as {user.name}</Text>
            <Button type="button" onClick={()=>dispatch(logOut())}>Log out</Button>
        </Container>
    )
};