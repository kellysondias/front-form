import { Formik } from "formik";
import schema from "../../../schema";
import { StyledForm } from "../../styled-comps/styled-form";
import { FormField } from "../../styled-comps/form-field";
import { Input } from "../input/input";
import { Select } from "../select/select";
import { useEffect, useState } from "react";
import { getCountries, getCities } from "../../../services/endpoints";
import { Button } from "../../button/button";

export const Form = () => {
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
        <StyledForm>
          <div className="container">
            <FormField>
              <h2>Dados Pessoais</h2>

              <div className="inputs">
                <Input
                  text="Nome"
                  icon="*"
                  for="name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Insira seu nome"
                />

                <Input
                  text="E-mail"
                  icon="*"
                  for="email"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Insira seu E-mail"
                />

                <Input
                  text="Telefone"
                  for="phone"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Insira seu número de telefone"
                />

                <Input
                  text="CPF"
                  icon="*"
                  for="cpf"
                  type="tel"
                  name="cpf"
                  id="cpf"
                  placeholder="Insira seu CPF"
                />
              </div>
            </FormField>

            <FormField>
              <h2>Destinos de Interesse</h2>

              <div className="inputs">
                <Select text="Selecione um país" options={countries}></Select>
                <Select text="Selecione uma cidade" options={cities}></Select>
              </div>
            </FormField>
          </div>

          <Button type="submit" text="Enviar"/>
        </StyledForm>
      )}
    </Formik>
  );
};
