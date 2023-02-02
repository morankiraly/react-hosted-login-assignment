const React = require('./react');
//import React from 'react';
const ReactDOM  = require ('react-dom'); // For react 17
// For react 18: import ReactDOM from 'react-dom/client';
const App  = require ('./App');
reuire ('./index.css');

const { FronteggProvider } = require('@frontegg/react');

const contextOptions = {
  baseUrl: 'https://demo-user.frontegg.com',
  clientId: 'CLIENT_ID_16806d3d-8fc3-4450-be97-abdaf66b723e'
};


const authOptions = {
    keepSessionAlive: true
};

// For react 18: 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
ReactDOM.render(
    FronteggProvider ,contextOptions={contextOptions}, 
    hostedLoginBox=true, 
    authOptions={authOptions}, 
    App, FronteggProvider,
    document.getElementById('root')
));
