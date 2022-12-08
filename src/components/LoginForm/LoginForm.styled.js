import styled from 'styled-components';

export const Container = styled.div`
max-width: 420px;
margin-left: 20px;
margin-top: 20px;
padding: 25px 25px 25px 25px;
border: 1px solid;
border-color: #000000;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 20px;
`;

export const Input = styled.input`
min-width: 300px;
min-height: 36px;
font-weight: normal;
font-size: 20px;
`;

export const Button = styled.button`
margin: 20px auto 20px auto;
min-width: 180px;
padding: 10px;
font-weight: normal;
font-size: 24px;
border-radius: 5%;
&:hover {
    background-color: #63c5da;
    color: #fff;
}
&:focus {
    background-color: #63c5da;
    color: #fff;
}
`;