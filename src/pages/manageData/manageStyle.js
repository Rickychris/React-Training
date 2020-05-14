import styled from 'styled-components';

export const styleDiv = styled.div`
width:50%;
background-color:#eee;
margin:20px 25px;
border:1px solid blanchedalmond;
`;

export const styleP = styled.p`
margin:5px;
`;
export const styleH1 = styled.h1`
margin:50px;
font-size:36px;
color:#022737;
`;

export const styleButton = styled.button`
background-color:${props => props.danger ? 'red' : 'limegreen'};
margin:25px;
width:100px;
font-weight:bold;
color:#022737;
height:50px;
`;