import React from 'react';
import { FiLinkedin, FiGithub, FiInbox } from 'react-icons/fi';
import { Header, Container, Social } from './styles';

const Exemplo: React.FC = () => {
  const perfil =
    'https://avatars2.githubusercontent.com/u/60328400?s=460&u=036f9101c10b989343b18b07677ab94ae748e032&v=4p';
  return (
    <Container>
      <Header>
        <div>
          <a href="/">
            <img src={perfil} alt="Perfil" />
          </a>
        </div>
        <section>
          <h1>Roberto Junior</h1>

          <p>
            I'm studying the 7th semester of science Computing and the GoStack
            Rocketseat Bootcamp. I have been focusing on full-stack programming,
            with the JavaScript + Typescript stack, Node.js, React.JS, and
            React-native. By I have the notion that the best way to get the
            knowledge is the experiênce, I have been accepting any kind of
            experiênce that puts me in a learning way, like programming
            marathons, hackathons, freelancer projects, and personal projects.
            To take a look at my recent projects, join me on Github
          </p>
        </section>
      </Header>
      <Social>
        <a href="robertojuniordev@gmail.com">
          <FiInbox size={40} />
        </a>
        <a href="https://www.linkedin.com/in/robertojrcdc/">
          <FiLinkedin size={40} />
        </a>
        <a href="https://github.com/robertokbr" target="_blanck">
          <FiGithub size={40} />
        </a>
      </Social>
    </Container>
  );
};

export default Exemplo;
