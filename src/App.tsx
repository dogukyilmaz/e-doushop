import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

import ThemeSelector from "./components/ThemeSelector";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "pages/Cart";
import Login from "pages/Login";
import Register from "pages/Register";
import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "redux/user/action";
import Profile from "pages/Profile";
import PrivateRoute from "components/PrivateRoute";
import NotFound from "pages/404";
import Shipping from "pages/Shipping";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.token) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  return (
    <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode}>
      <Router>
        <Header darkMode={darkMode} />
        <main className="App py-2">
          <Container>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Home} />
              <Route exact path="/product/:id" component={Product} />

              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/shipping" component={Shipping} />
              <PrivateRoute exact path="/cart/:id?">
                <Cart darkMode={darkMode} />
              </PrivateRoute>
              <Route exact path="/404">
                <NotFound user={user} />
              </Route>
              <Redirect to="/404" />
            </Switch>
          </Container>
        </main>
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeSelector>
  );
};

export default App;
