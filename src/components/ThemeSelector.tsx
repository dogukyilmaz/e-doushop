import React, { useCallback, useLayoutEffect, useState } from "react";

enum THEMES {
  DARKLY = "darkly",
  MINTY = "minty",
  SIMPLEX = "simplex",
  SKETCHY = "sketchy",
  LUX = "lux",
  CYBORG = "cyborg",
  COSMO = "cosmo",
}

const ThemeSelector: React.FC = ({ children }) => {
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

  return (
    <>
      <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-danger">
          {theme}
        </button>
        <div className="btn-group show" role="group">
          <button
            id="btnGroupDrop4"
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setVisible(!isVisible)}
          ></button>
          <div
            className={`dropdown-menu ${isVisible && "show"}`}
            aria-labelledby="btnGroupDrop4"
            style={{
              position: "absolute",
              transform: "translate3d(0px, 36px, 0px)",
              top: 0,
              left: 0,
              willChange: "transform",
            }}
            x-placement="bottom-start"
          >
            <button
              className={`dropdown-item ${theme === THEMES.DARKLY && "active"}`}
              onClick={() => handleTheme(THEMES.DARKLY)}
            >
              Darkly
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.MINTY && "active"}`}
              onClick={() => handleTheme(THEMES.MINTY)}
            >
              Minty
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.SIMPLEX && "active"}`}
              onClick={() => handleTheme(THEMES.SIMPLEX)}
            >
              Simplex
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.SKETCHY && "active"}`}
              onClick={() => handleTheme(THEMES.SKETCHY)}
            >
              Sketchy
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.LUX && "active"}`}
              onClick={() => handleTheme(THEMES.LUX)}
            >
              Lux
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.CYBORG && "active"}`}
              onClick={() => handleTheme(THEMES.CYBORG)}
            >
              Cyborg
            </button>
            <button
              className={`dropdown-item ${theme === THEMES.COSMO && "active"}`}
              onClick={() => handleTheme(THEMES.COSMO)}
            >
              Cosmo
            </button>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default ThemeSelector;
