import styled from "styled-components";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import "./style.css";
import Footer from "./components/Footer";

const Main = styled.main``;

function App() {
  return (
    <Main>
      <NavBar />
      <Header />
      <Experience />
      <Footer />
    </Main>
  );
}

export default App;
