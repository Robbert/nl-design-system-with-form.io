import React, { useEffect } from "react";
import { AppConfig } from "./config";
import { Form, initAuth } from "react-formio";
import { useAuth } from "./modules/auth";
import { Loading, Modal } from "./common";
import { UtrechtDocument, UtrechtHeading1, UtrechtPageFooter } from "@utrecht/web-component-library-react";
import { sanitizeConfig } from "@utrecht/component-library-formio";
import "./App.scss";

function App() {
  const {
    dispatch,
    state: { isActive },
  } = useAuth();

  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    /*
     * ./node_modules/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js 3:18
     * Module parse failed: Unexpected token (3:18)
     * File was processed with these loaders:
     *  * ./node_modules/babel-loader/lib/index.js
     * You may need an additional loader to handle the result of these loaders.
     * | import { p as e, b as t } from "./p-3048cba9.js";
     * | (() => {
     * >   const t = import.meta.url,
     * |         a = {};
     * |   return "" !== t && (a.resourcesUrl = new URL(".", t).href), e(a);
     */
    // import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@utrecht/web-component-library-stencil@latest/dist/utrecht/utrecht.esm.js";
    script.type = "module";
    document.body.appendChild(script);
    document.body.className = "utrecht-theme";
  }, []);

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
      <UtrechtDocument>
        <UtrechtHeading1>NL Design System with form.io</UtrechtHeading1>
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
        <div className="theme-switcher">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" onChange={(evt) => (document.body.className = evt.target.value)}>
            <option value="duo-theme">DUO</option>
            <option value="amsterdam-theme">Gemeente Amsterdam</option>
            <option value="denhaag-theme">Den Haag</option>
            <option value="utrecht-theme" selected>
              Gemeente Utrecht
            </option>
          </select>
        </div>
        <Form src={`${AppConfig.projectUrl}/test`} options={{ sanitizeConfig }} />
        <UtrechtPageFooter>© 2021 Robbert Broersma</UtrechtPageFooter>
      </UtrechtDocument>
    </>
  );
}

export default App;
