import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const AuthNav = () => {
    return (<div>
        <nav>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Log in</Link>
        </nav>
    </div>)
}