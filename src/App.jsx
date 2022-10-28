import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import schema from "./schema";
import { useEffect, useState } from "react";

async function getCountries() {
  const url = await fetch("https://amazon-api.sellead.com/country");
  const json = await url.json();
  return json;
}

async function getCities() {
  const url = await fetch("https://amazon-api.sellead.com/city");
  const json = await url.json();
  const filteredJson = json.filter((city) => city.name_ptbr !== null );
  return filteredJson;
}

getCities()

function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const countriesResponse = await getCountries();
      const citiesResponse = await getCities();

      setCountries(countriesResponse);
      setCities(citiesResponse);
    }
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main>
        <h1 lang="en">Frontend Travel</h1>

        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
            phone: "",
            cpf: "",
          }}
        >
          {() => (
            <Form>
              <div className="container">
                <FormField>
                  <h2>Dados Pessoais</h2>

                  <div className="inputs">
                    <div>
                      <label htmlFor="name">
                        Nome <i>*</i>
                      </label>
                      <Field
                        className="field"
                        type="text"
                        name="name"
                        id="name"
                      ></Field>
                      <ErrorMessage
                        component="span"
                        className="error"
                        name="name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">
                        E-mail <i>*</i>
                      </label>
                      <Field
                        className="field"
                        type="text"
                        name="email"
                        id="email"
                      ></Field>
                      <ErrorMessage
                        component="span"
                        className="error"
                        name="email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone">Telefone</label>
                      <Field
                        className="field"
                        type="tel"
                        name="phone"
                        id="phone"
                      ></Field>
                    </div>

                    <div>
                      <label htmlFor="cpf">
                        CPF <i>*</i>
                      </label>
                      <Field
                        className="field"
                        type="text"
                        name="cpf"
                        id="cpf"
                      ></Field>
                      <ErrorMessage
                        component="span"
                        className="error"
                        name="cpf"
                      />
                    </div>
                  </div>
                </FormField>

                <FormField>
                  <h2>Destinos de Interesse</h2>

                  <div className="inputs">
                    <select>
                      <option value="">Selecione um país</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.name_ptbr}>
                          {country.name_ptbr}
                        </option>
                      ))}
                    </select>

                    <select>
                      <option value="">Selecione uma cidade</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city.name_ptbr}>
                          {city.name_ptbr}
                        </option>
                      ))}
                    </select>
                  </div>
                </FormField>
              </div>

              <button type="submit">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </Main>
    </>
  );
}

const Main = styled.main`
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

  @media (max-width: 458px) {
    h1 {
      font-size: 3.5rem;
    }
`;

const Form = styled.form`
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
    margin: 2rem;
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

const FormField = styled.div`
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
    font-size: 2.5rem;
    background-color: #1a1f24;
    color: #fff;
    border: none;
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
    position: absolute;
    top: 0;
    rigth: 0;
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
    margin: 0 auto;
    border: none;
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

    label,select {
      font-size: 1.5rem;
    }

    option {
      font-size: 1rem;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    font-size: 62.5%;
    background-color: theme.background;
    color: theme.color; 
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161515ee;
    font-family: 'Montserrat', sans-serif;
  }
  ol, ul {
    list-style: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button,
  input[type=number] {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
`;

export default App;
