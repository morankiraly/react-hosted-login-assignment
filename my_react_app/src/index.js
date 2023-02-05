import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const contextOptions = {
  baseUrl: 'https://app-b7nbab8v2i6z.frontegg.com',
  clientId: '34ff9d4a-52d5-4c4a-a9bd-82e73fcdc57c'
};


root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
