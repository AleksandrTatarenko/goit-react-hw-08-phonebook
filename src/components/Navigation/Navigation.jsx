import { NavLink} from "react-router-dom";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

const Link = styled(NavLink)`
  font-weght: normal;
  font-size: 24px;
  margin-left: 25px;
  text-decoration: none;
  padding: 3px 10px 3px 10px;
  border-radius: 5%;
  color: black;
  &.active {
    color: white;
    background-color: #63c5da;
  }
`;

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <div>
      <nav>
        <Link to='/' end>Home</Link>
        {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
      </nav>
    </div>);
};