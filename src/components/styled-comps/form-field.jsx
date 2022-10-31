import styled from "styled-components";

export const FormField = styled.div`
  background-color: #2d343b;
  font-weight: bold;
  padding: 20px 30px;
  border-radius: 0.5rem;

  :last-child {
    min-height: 400px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  label {
    font-size: 2rem;
  }

  .field {
    max-width: 300px;
    width: 100%;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    background-color: #1a1f24;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
  }

  .error {
    color: red;
    position: absolute;
    bottom: -1.6rem;
  }

  #phone,
  #cpf {
    width: 100%;
  }

  i {
    color: red;
    font-size: 2rem;

  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
  }

  .inputs div {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 10px;
  }

  select {
    background-color: #1a1f24;
    color: rgba(255, 255, 255, 0.815);
    max-width: 313px;
    width: 80%;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    border: none;
    border-radius: 0.5rem;
  }

  select:first-child {
    margin-bottom: 20px;
  }

  option {
    background-color: #2d343b;
    color: #fff;
    font-size: 1.5rem;
  }

  @media (max-width: 458px) {
    max-width: 250px;

    h2 {
      font-size: 2rem;
    }

    .error {
      bottom: 0;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      top: 5.9rem;
    }


    label,select {
      font-size: 1.5rem;
    }

    option {
      font-size: 1rem;
    }
  }
`;