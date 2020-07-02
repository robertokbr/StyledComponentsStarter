import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

body{

  --webkit-font-smoothing: antialiased;
  background: linear-gradient(-45deg, #EE7752, #E73C73, #23A6D5,#23D5AB );
background-size: 400% 400%;
position: relative;
animation: change 10s ease-in-out infinite;
}
@keyframes change{
0% {
background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
    }

}


body, input, button {
  font: 16px Roboto, sans-serif;
}


button{
  cursor: pointer;
}

#root{
height: 100%;
display:flex;
align-items:center;
justify-content:center;
margin: 120px auto;
padding: 30px 30px;

}

`;
