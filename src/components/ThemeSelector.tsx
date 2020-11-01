import React, { useCallback, useLayoutEffect, useState } from "react";
import { Button, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";

enum THEMES {
  DARKLY = "darkly",
  MINTY = "minty",
  SIMPLEX = "simplex",
  SKETCHY = "sketchy",
  LUX = "lux",
  CYBORG = "cyborg",
  COSMO = "cosmo",
}

const ThemeSelector: React.FC<any> = ({ children, darkMode, setDarkMode }) => {
  const [theme, setTheme] = useState<any>(localStorage.getItem("theme"));
  const [isVisible, setVisible] = useState(false);

  const selectTheme = useCallback(() => {
    switch (theme) {
      case THEMES.DARKLY:
        return require("../assets/bootstrap-darkly.min.css");
      case THEMES.MINTY:
        return require("../assets/bootstrap-minty.min.css");
      case THEMES.SIMPLEX:
        return require("../assets/bootstrap-simplex.min.css");
      case THEMES.SKETCHY:
        return require("../assets/bootstrap-sketchy.min.css");
      case THEMES.LUX:
        return require("../assets/bootstrap-lux.min.css");
      case THEMES.CYBORG:
        return require("../assets/bootstrap-cyborg.min.css");
      case THEMES.COSMO:
        return require("../assets/bootstrap-cosmo.min.css");
      default:
        return require("../assets/bootstrap-darkly.min.css");
    }
  }, [theme]);

  useLayoutEffect(() => {
    selectTheme();
  }, [selectTheme]);

  const handleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    window.location.reload();
  };

  const handleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <>
      <Container fluid>
        <Row>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
            style={{ position: "fixed", left: 0, top: 100, zIndex: 9999 }}
          >
            <Button variant={darkMode ? "dark" : "light"} onClick={handleMode}>
              {darkMode ? "Light" : "Dark"}
            </Button>
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setVisible(!isVisible)}
              ></button>
              <div className={`dropdown-menu ${isVisible && "show"}`} aria-labelledby="btnGroupDrop1">
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.DARKLY && "active"}`}
                  onClick={() => handleTheme(THEMES.DARKLY)}
                >
                  Darkly
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.MINTY && "active"}`}
                  onClick={() => handleTheme(THEMES.MINTY)}
                >
                  Minty
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.SIMPLEX && "active"}`}
                  onClick={() => handleTheme(THEMES.SIMPLEX)}
                >
                  Simplex
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.SKETCHY && "active"}`}
                  onClick={() => handleTheme(THEMES.SKETCHY)}
                >
                  Sketchy
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.LUX && "active"}`}
                  onClick={() => handleTheme(THEMES.LUX)}
                >
                  Lux
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.CYBORG && "active"}`}
                  onClick={() => handleTheme(THEMES.CYBORG)}
                >
                  Cyborg
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === THEMES.COSMO && "active"}`}
                  onClick={() => handleTheme(THEMES.COSMO)}
                >
                  Cosmo
                </Dropdown.Item>
              </div>
            </div>
          </div>
          {/* <DropdownButton
            id="dropdown-basic-button"
            title={theme}
            style={{ position: "absolute", right: 0, top: 500, zIndex: 9999 }}
          >
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.DARKLY && "active"}`}
              onClick={() => handleTheme(THEMES.DARKLY)}
            >
              Darkly
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.MINTY && "active"}`}
              onClick={() => handleTheme(THEMES.MINTY)}
            >
              Minty
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.SIMPLEX && "active"}`}
              onClick={() => handleTheme(THEMES.SIMPLEX)}
            >
              Simplex
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.SKETCHY && "active"}`}
              onClick={() => handleTheme(THEMES.SKETCHY)}
            >
              Sketchy
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.LUX && "active"}`}
              onClick={() => handleTheme(THEMES.LUX)}
            >
              Lux
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.CYBORG && "active"}`}
              onClick={() => handleTheme(THEMES.CYBORG)}
            >
              Cyborg
            </Dropdown.Item>
            <Dropdown.Item
              className={`dropdown-item ${theme === THEMES.COSMO && "active"}`}
              onClick={() => handleTheme(THEMES.COSMO)}
            >
              Cosmo
            </Dropdown.Item>
          </DropdownButton> */}
        </Row>
      </Container>
      {children}
    </>
  );
};

export default ThemeSelector;
