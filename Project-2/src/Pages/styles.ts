import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  min-width: 500px;
  max-height: 900px;
  display: flex;
`;
export const Social = styled.div`
  background-color: #24242497;

  min-width: 100px;
  max-height: 900px;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  svg {
    color: #f0f0f5;
    transition: 0.2s;
    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const Header = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #24242490;
  border-radius: 10px 0 0 10px;
  padding: 45px;
  div {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    margin: 20px auto;
    &:hover {
      background-color: #78e08f;
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
  section {
    background: #24242497;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;

    p {
      font-size: 18px;
      margin: 20px 0;
      color: #f5f6fa99;
    }
  }
`;
