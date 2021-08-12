import { Formio } from 'react-formio';

const getQuery = (query) => {
  window.location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      query[item.split('=')[0]] = item.split('=')[1] && decodeURIComponent(item.split('=')[1]);
    });

  return query;
};

const query = getQuery({});
const PROJECT_URL = query.projectUrl || 'https://tgbtohcsdunxdpv.form.io';
const API_URL = query.apiUrl || 'https://api.form.io';

export const AppConfig = {
  projectUrl: PROJECT_URL,
  apiUrl: API_URL,
};

export const AuthConfig = {
  anonState: '/auth',
  authState: '/',
  login: {
    form: 'user/login',
  },
  register: {
    form: 'user/register',
  },
};

export const CustomTags = [
  'utrecht-article',
  'utrecht-badge-counter',
  'utrecht-badge-data',
  'utrecht-badge-status',
  'utrecht-breadcrumb',
  'utrecht-button',
  'utrecht-checkbox',
  'utrecht-document',
  'utrecht-form-field-checkbox',
  'utrecht-form-field-textbox',
  'utrecht-heading',
  'utrecht-heading-1',
  'utrecht-heading-2',
  'utrecht-heading-3',
  'utrecht-heading-4',
  'utrecht-heading-5',
  'utrecht-heading-6',
  'utrecht-html-content',
  'utrecht-icon-facebook',
  'utrecht-icon-instagram',
  'utrecht-icon-linkedin',
  'utrecht-icon-twitter',
  'utrecht-icon-whatsapp',
  'utrecht-logo',
  'utrecht-page-footer',
  'utrecht-pagination',
  'utrecht-paragraph',
  'utrecht-separator',
  'utrecht-sidenav',
  'utrecht-textbox',
];

Formio.setProjectUrl(AppConfig.projectUrl);
Formio.setBaseUrl(AppConfig.apiUrl);
