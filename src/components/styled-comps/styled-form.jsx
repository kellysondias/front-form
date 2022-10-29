import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin: 0 auto;
}

button {
  color: #1c2126;
  background-color: #f7c411;
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  padding: 1.5rem 3rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.1s ease-in-out;
}

button:hover {
  box-shadow: 1px 1px 10px #f7c411;
}

@media (max-width: 860px) {
  .container {
    flex-direction: column;
    gap: 3rem;
  }
}

@media (max-width: 458px) {
  button {
    font-size: 1.3rem;
  }
}
`;