import styled from 'styled-components';
import icon from '../assets/icon.png';

export const Container = styled.div`
width: 1000px;
height: 600px;
display:flex;
justify-content:center;
background-color: #f0f0f563 ;

`;

export const Title = styled.h1`
font-size: 80px;
color: white;
`;

export const Box = styled.div`
background:url(${icon}) no-repeat right;
padding: 30px;
`;
