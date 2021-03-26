import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/store';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Routes from './routes';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
