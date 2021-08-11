import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { initAuth } from 'react-formio';
import { useAuth, AuthPage } from './modules/auth';
import { FormProvider, FormsPage } from './modules/forms/form';
import { Footer, Header, Home, Loading, Modal } from './common';
import { AppConfig } from './config';
import './App.scss';
import EventsPage from './modules/events/components/EventsPage';
import { Alerts, AlertsProvider } from './modules/alerts';
import '@utrecht/component-library-css/dist/bem.css';
import '@utrecht/design-tokens/dist/index.css';

function App() {
  const { dispatch, state: { isActive } } = useAuth();

  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  return (
    <>
      { isActive ?
          (
            <Modal className="alert alert-info">
              <div className="d-flex flex-column align-items-center">
                <Loading style={{ marginBottom: ' 10px' }}/>
                Logging In...
              </div>
            </Modal>
          )
          : null
      }
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
		    <div class="theme-switcher">
		      <label for="">Theme:</label>
		      <select onChange={(evt) => document.documentElement.className = evt.target.value}>
		        <option value="duo-theme">DUO</option>
		        <option value="amsterdam-theme">Gemeente Amsterdam</option>
		        <option value="utrecht-theme" selected>Gemeente Utrecht</option>
		      </select>
		    </div>

        <AlertsProvider>
          <Alerts/>
          <div className="container" id="main">
            { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
                <div className="alert alert-warning">
                  This app is still configured to use the default project.
                  Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js
                </div>
                : null
              }
            <Route exact path="/" component={Home} />
            <Route path="/form" component={FormsPage} />
            <Route path="/event" render={(props) => <FormProvider><EventsPage {...props} /></FormProvider>} />
            <Route path="/auth" component={AuthPage} />
          </div>
        </AlertsProvider>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
