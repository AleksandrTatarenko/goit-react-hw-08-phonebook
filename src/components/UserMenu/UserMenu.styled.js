import styled from 'styled-components';

export const Container = styled.div`
min-width: 10vw;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Button = styled.button`
padding: 5px 10px 5px 10px;
border-radius: 8%;
font-size: 16px;
font-weight: normal;
background-color: white;
color: black;
&:hover {
    background-color: #63c5da;
    color: white;
}
`;

export const Text = styled.p`
font-size: 16px;
font-weight: normal;
`;