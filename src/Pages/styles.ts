import styled from 'styled-components';
import icon from '../assets/icon.png';

export const Container = styled.div`
width: 1000px;
height: 600px;
display:flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
background-color: #f0f0f563 ;
padding: 0 100px;
  h1{
    color:white;
  }

`;

export const Header = styled.div`
width: 300px;
height: 300px;
box-sizing: border-box;
background-clip: content-box;
border: 0 solid transparent;
border-radius: 50% ;
background-color: rgba(243,246,248,.94);
position: relative;
margin-top: 30px;
  &:hover{
    background-color: #72F4C3;
  }
div{
  width: 100%;
  height: 100%;
  border-radius: 50%;

  button{
border:none;
background: none;
    line-height: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    padding:0;
    img{
      width: 285px;
      height: 285px;
      border-radius: 50%;
    }
  }
}
`;

export const Social = styled.div`
  width: 100%;
  max-height: 100px;
  flex:1;
  background: #f0f0f563;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content: space-around;
  margin-bottom: 50px;
    button{
      height: 100%;
      border:none;
      background: none;
      font-size: 20px;
      font-weight: bold;
      color:white;
      transition: 0.2s;
      &:hover{
        font-size: 30px;
      }
    }
`;
