import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;

  background-color: var(--medGrey);
  color: var(--white);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  .column {
    background-color: #111;
    display: flex;
    flex: 1;
    margin: 0 20px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
