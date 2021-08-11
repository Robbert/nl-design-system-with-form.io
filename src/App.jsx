import React, { useEffect } from "react";
import { AppConfig } from "./config";
import { Form, initAuth } from "react-formio";
import { useAuth } from "./modules/auth";
import { Loading, Modal } from "./common";
import "./App.scss";
import "@utrecht/component-library-css/dist/bem.css";
import "@utrecht/design-tokens/dist/index.css";

function App() {
  const {
    dispatch,
    state: { isActive },
  } = useAuth();

  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  return (
    <>
      {isActive ? (
        <Modal className="alert alert-info">
          <div className="d-flex flex-column align-items-center">
            <Loading style={{ marginBottom: " 10px" }} />
            Logging In...
          </div>
        </Modal>
      ) : null}
      <div className="App">
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/theme/index.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nl-design-system-unstable/rijkshuisstijl-design-tokens/dist/theme/index.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nl-design-system-unstable/duo-design-tokens/dist/theme/index.css"
        />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <div className="theme-switcher">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" onChange={(evt) => (document.documentElement.className = evt.target.value)}>
            <option value="duo-theme">DUO</option>
            <option value="amsterdam-theme">Gemeente Amsterdam</option>
            <option value="utrecht-theme" selected>
              Gemeente Utrecht
            </option>
          </select>
        </div>
        <Form src={`${AppConfig.projectUrl}/test`} />
      </div>
    </>
  );
}

export default App;
