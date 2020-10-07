import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ThemeSelector from "./components/ThemeSelector";
import "./App.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  return (
    <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode}>
      <Header darkMode={darkMode} />
      <main className="App py-2">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer darkMode={darkMode} />
    </ThemeSelector>
  );
};

export default App;
