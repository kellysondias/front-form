import styled from "styled-components";

export const Main = styled.main`
  margin-top: 3rem;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.3rem;
    text-shadow: 0.2rem 0.2rem 0px #000;
  }

  @media (max-width: 860px) {
    margin-top: 0;
  }

  @media (max-width: 458px) {

    h1 {
      font-size: 3.5rem;
    }
`;