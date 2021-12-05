import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';

import App from './App/App';
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry"
import AviasalesServices from './Services/AviasalesServices'
import { AviasalesProvider } from './components/AviasalesContext/AviasalesContext'

import store from "./Store"

const aviasalesServices = new AviasalesServices()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AviasalesProvider value={aviasalesServices}>
        <Router>
          <App />
        </Router>
      </AviasalesProvider>
    </ErrorBoundary>
  </Provider>
  , document.getElementById('root')
);
