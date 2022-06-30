import styled from "styled-components";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

const Main = styled.main``;

function App() {
  return (
    <Main>
      <NavBar />
      <Header />
      <Header />
    </Main>
  );
}

export default App;
