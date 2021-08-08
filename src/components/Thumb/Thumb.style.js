import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.7;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
