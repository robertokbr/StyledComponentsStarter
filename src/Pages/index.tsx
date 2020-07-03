import React from 'react';
import { Container, Header, Social } from './styles';

const Exemplo: React.FC = () => {
  const perfil = 'https://avatars2.githubusercontent.com/u/60328400?s=460&u=036f9101c10b989343b18b07677ab94ae748e032&v=4p';
  return (
    <Container>

      <Header>
        <div className="card">
          <button type="button">
            <img src={perfil} alt="Perfil" />
          </button>
        </div>
      </Header>
      <h1>Robertokbr</h1>
      <Social>
        <button type="button">
          Linkedin
        </button>
        <button type="button">
          Github
        </button>
        <button type="button">
          Stack Overflow
        </button>
      </Social>
    </Container>
  );
};

export default Exemplo;
