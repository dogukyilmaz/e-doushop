import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ThemeSelector from "./components/ThemeSelector";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  return (
    <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode}>
      <Router>
        <Header darkMode={darkMode} />
        <main className="App py-2">
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
          </Container>
        </main>
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeSelector>
  );
};

export default App;
