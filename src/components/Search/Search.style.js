import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: var(--darkGrey);
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    height: 80px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background-color: var(--medGrey);
  margin: 0 auto;
  border-radius: 50px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;

    @media screen and (max-width: 400px) {
      width: 20px;
      top: 10px;
    }
  }
  input {
    position: absolute;

    left: 50px;
    font-size: 28px;
    margin: 8px 0;
    border: 0;
    background-color: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    @media screen and (max-width: 400px) {
      font-size: 20px;
      height: 25px;
      left: 40px;
    }
  }

  @media screen and (max-width: 400px) {
    height: 40px;
  }
`;
