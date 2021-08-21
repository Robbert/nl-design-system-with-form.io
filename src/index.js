import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Formio, Templates } from 'react-formio';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config';
import { AuthProvider } from './modules/auth';
import '@utrecht/component-library-css/dist/bem.css';
import { components, templates } from '@utrecht/component-library-formio';
import '@utrecht/design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';

Formio.use({ components });
Templates.current = templates;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
