import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ThemeSelector from "./components/ThemeSelector";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeSelector>
      <Header />
      <main className="App">
        <h1>e-douShop</h1>
      </main>
      <Footer />
    </ThemeSelector>
  );
};

export default App;
