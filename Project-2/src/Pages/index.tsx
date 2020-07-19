import React from 'react';
import { FiMapPin, FiGithub } from 'react-icons/fi';
import { Header, Container, User, Contact, Top } from './styles';

const Exemplo: React.FC = () => {
  const perfil =
    'https://avatars2.githubusercontent.com/u/60328400?s=460&u=036f9101c10b989343b18b07677ab94ae748e032&v=4p';
  return (
    <Container>
      <Top />
      <User>
        <Header>
          <div>
            <a href="/">
              <img src={perfil} alt="Perfil" />
            </a>
          </div>
          <h1>Roberto Junior</h1>
          <strong>
            <FiMapPin />
            Belém/PA
          </strong>
        </Header>
        <Contact>
          <FiGithub size={30} />
          <h3>Robertokbr</h3>
        </Contact>
        <Contact>
          <FiGithub size={30} />
          <h3>Robertokbr</h3>
        </Contact>
        <Contact>
          <FiGithub size={30} />
          <h3>Robertokbr</h3>
        </Contact>
        <Contact>
          <FiGithub size={30} />
          <h3>Robertokbr</h3>
          <h3>Contact me by:</h3>
        </Contact>
      </User>
    </Container>
  );
};

export default Exemplo;
