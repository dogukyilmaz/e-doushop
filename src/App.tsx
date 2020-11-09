import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ThemeSelector from "./components/ThemeSelector";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "pages/Cart";
import Login from "pages/Login";
import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "redux/user/action";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const token = useSelector((state: RootState) => state.auth.user?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode}>
      <Router>
        <Header darkMode={darkMode} />
        <main className="App py-2">
          <Container>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/register" component={Regoster} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/cart/:id?">
              <Cart darkMode={darkMode} />
            </Route>
          </Container>
        </main>
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeSelector>
  );
};

export default App;
