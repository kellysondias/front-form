import { GlobalStyle } from "./components/styled-comps/global-style";
import { Main } from "./components/styled-comps/main";
import { Form } from "./components/form-comps/form/form";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <h1 lang="en">Frontend Travel</h1>
        <Form/>
      </Main>
    </>
  );
}

export default App;