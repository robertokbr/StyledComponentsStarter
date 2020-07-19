import styled from 'styled-components';

export const Container = styled.div`
  background-color: #24242499;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Top = styled.div`
  background-color: #242424;
  padding: 30px;
  margin-bottom: 10px;
`;

export const User = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  margin-left: 10px;

  svg {
    margin-right: 10px;
  }
`;

export const Header = styled.header`
  border-radius: 15px 15px 0 0;
  flex: 1;
  background-color: #24242499;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 1px 1px 20px  rgba(0, 0, 0, 0.2);

  div {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    margin: 20px auto;

    &:hover {
      background-color: #78e08f;
  box-shadow: 1px 1px 100px #78e08f40;


    }

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
    }
  }
  strong {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
export const Contact = styled.div`
  svg {
    margin-right: 40px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.5);
    }
  }
  box-shadow: 1px 1px 10px  rgba(0, 0, 0, 0.2);

  flex: 1;
  background-color: #24242499;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 2px 0;
  padding: 0 30px;

  &:last-child {
    margin-bottom: 10px;
    border-radius: 0 0 15px 15px;
  }
`;
